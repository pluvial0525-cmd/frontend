import React, { createContext, useReducer } from 'react';

export const TodoContext = createContext();

// 💡 소중한 자바, 파이썬, CSS, 리액트 오브젝트 4개 데이터를 다시 완벽하게 살려냈습니다!
const initialTodos = [
  { id: 1, subject: "자바(Java)", checked: false },
  { id: 2, subject: "파이썬(Python)", checked: false },
  { id: 3, subject: "CSS", checked: true },
  { id: 4, subject: "리액트", checked: false },
];

const initialState = {
  todoList: initialTodos,
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'INSERT':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case 'TOGGLE':
      return {
        ...state,
        todoList: state.todoList.map(todo =>
          todo.id === action.payload
            ? { ...todo, checked: !todo.checked }
            : todo
        ),
      };

    case 'UPDATE':
      return {
        ...state,
        todoList: state.todoList.map(todo =>
          todo.id === action.payload.id
            ?   { 
                    ...todo, 
                    subject: action.payload.subject,
                    checked: false 
                }
            : todo
        ),
      };

    case 'DELETE':
      return {
        ...state,
        todoList: state.todoList.filter(todo => 
            todo.id !== action.payload)
      };

    default:
      return state;
  }
}

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;