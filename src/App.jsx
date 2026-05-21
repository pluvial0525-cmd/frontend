import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'

import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'

import HeaderBar from './no2_components/layout/HeaderBar'
import SiderBar from './no2_components/layout/SiderBar'
import LoginForm from './no2_components/user/LoginForm'
import LoginPage from './no1_pages/user/LoginPage'
import RegisterForm from './no2_components/user/RegisterForm' 

const initalState = [
  {id: 1, username: "john", password: "1111"},
  {id: 2, username: "peter", password: "1111"},
  {id: 3, username: "susan", password: "1111"},
  {id: 4, username: "sue", password: "1111"},
]
const initalMode = {
  isLogin: false,
  username: ""
}

function App() {
  const [users, setUsers] = useState(initalState);
  const [loginMode, setLoginMode] = useState(initalMode);
  const [open, setOpen] = useState(false)

  return (
    <BrowserRouter>
    {console.log(users)}
      
      {/* ⭕ 각각의 이름에 맞게 제대로 매칭해서 전달해 줍니다 */}
      <HeaderBar 
        loginMode={loginMode} 
        setLoginMode={setLoginMode} 
        setOpen={setOpen} 
      />

      <SiderBar open={open} />

      {/* 본문 콘텐츠 영역 */}
      <Content
        open={open}
        onClick={() => {
          if (open) {
            setOpen(false)
          }
        }}
      >
        <Routes>
          <Route path="/login" element={
            <LoginPage
              users={users} 
              setLoginMode={setLoginMode}
            />
          }/>
        
          <Route path="/register" element={
            <RegisterForm setUsers={setUsers} />
          }/>

          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/employee" element={<EmployeePage />} />
        </Routes>
      </Content>
    </BrowserRouter>
  )
}

export default App

/* styled-components */
const Layout = styled.div`
  min-height: 100vh;
`

const Content = styled.div`
  min-height: calc(100vh - 70px);
  background-color: #f3f4f6;
  
  /* 🌟 기본 패딩 20px + 헤더 고정 높이 70px = 총 90px 주어 짤림 현상 해결 */
  padding: 90px 20px 20px 20px;

  /* 사이드바 열림에 따른 여백 조절 */
  margin-left: ${({ open }) => (open ? '220px' : '0')};
  transition: 0.3s;
`