import React, { createContext, useReducer } from 'react'

export const UserContext = createContext();

const initialUsers = [
  { id: 1, username: "john", password: "1111" },
  { id: 2, username: "peter", password: "1111" },
  { id: 3, username: "susan", password: "1111" },
  { id: 4, username: "sue", password: "1111" },
]

const initialState = {
  users: initialUsers,
  username: '',
  isLogin: false // 💡 대문자 L 확인
}

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLogin: true, // 💡 오타 수정: islogin -> isLogin
        username: action.payload
      }
    case "register":
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.payload.id,
            username: action.payload.username,
            password: action.payload.password
          }
        ]
      }
    case "logout":
      return {
        ...state,
        isLogin: false, // 💡 오타 및 로직 수정: 로그아웃 시 로그인 상태를 false로!
        username: ''    // 💡 오타 수정: usename -> username 변경 및 이름 비우기
      }
    default:
      return state;
  }
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;