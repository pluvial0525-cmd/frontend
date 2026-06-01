import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { todoAllGetApi, todoPostApi, todoPutApi, todoDeleteApi } from "../apis/todo.api"

// --- 비동기 Thunk 선언 ---
export const todoAllGetSlice = createAsyncThunk(
    "todoAllGetSlice",
    async (_, thunkAPI) => {
        try {
            return await todoAllGetApi();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const todoPostSlice = createAsyncThunk(
    "todoPostSlice",
    async (dataObj, thunkAPI) => {
        try {
            return await todoPostApi(dataObj);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const todoPutSlice = createAsyncThunk(
    "todoPutSlice",
    async (dataObj, thunkAPI) => {
        try {
            return await todoPutApi(dataObj);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const todoDeleteSlice = createAsyncThunk(
    "todoDeleteSlice",
    async (id, thunkAPI) => {
        try {
            return await todoDeleteApi(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const todoToggleSlice = createAsyncThunk(
    "todoToggleSlice",
    async (dataObj, thunkAPI) => {
        try {
            // 💡 오타 및 Thunk 호출 오류 수정: 순수 API 함수인 todoPutApi를 직접 호출해야 합니다.
            return await todoPutApi(dataObj);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const initialObj = {
    subject: "",
    checked: false
}

const initialState = {
    todoObj: initialObj,
    todoList: [],
    
}

const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        select: (state, action) => {
            state.selectedId = action.payload
        },
        setTodoObj: (state, action) => {
            state.todoObj = action.payload
        },
        setMode: (state, action) => {
            state.mode = action.payload
        },
        toggle: (state, action) => {
            state.todoList = state.todoList.map(todo => (
                todo.id === action.payload ?
                    { ...todo, checked: !todo.checked } : todo
            ))
        },
        change: (state, action) => {
            state.todoObj = {
                ...state.todoObj,
                [action.payload.name] : action.payload.value
            }
        },
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(todoAllGetSlice.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(todoAllGetSlice.fulfilled, (state, action) => {
                state.todoList = action.payload
                state.loading = false
            })
            .addCase(todoAllGetSlice.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(todoPostSlice.fulfilled, (state, action) => {
                // 💡 오류 수정: 존재하지 않던 state.todoTable을 state.todoList로 변경
                state.todoList = [...state.todoList, action.payload]
                state.loading = false
                state.todoObj = initialObj 
            })
            .addCase(todoPutSlice.fulfilled, (state, action) => {
                // 💡 오류 수정: 수정 완료 후 실시간 리스트 동기화 대상 변수 통일
                state.todoList = state.todoList.map(todo => (
                    todo.id === state.selectedId ? action.payload : todo
                ))
                state.loading = false
            })
            .addCase(todoToggleSlice.fulfilled, (state, action) => {
                // 💡 추가: 토글 완료 시 실시간으로 체크 상태 업데이트 동기화
                state.todoList = state.todoList.map(todo => (
                    todo.id === state.selectedId ? action.payload : todo
                ))
                state.loading = false
            })
            .addCase(todoDeleteSlice.fulfilled, (state) => {
                // 💡 오류 수정: 삭제 완료 후 리스트 동기화 대상 변수 통일
                state.todoList = state.todoList.filter(todo => (
                    todo.id !== state.selectedId
                ))
                state.loading = false
            })
    }
})

export const { remove, update, toggle, change, select, setTodoObj, setMode } = todoSlice.actions;
export default todoSlice.reducer;