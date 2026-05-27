// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'

import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'

import HeaderBar from './no2_components/layout/HeaderBar'
import SiderBar from './no2_components/layout/SiderBar'
import LoginPage from './no1_pages/user/LoginPage'
import RegisterPage from './no1_pages/user/RegisterPage'

import EmployeeProvider from './no0_context/EmployeeContext'
import UserProvider from './no0_context/UserContext'
import TodoProvider from './no0_context/TodoContext' // 💡 임포트는 유지합니다.

function App() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
    <UserProvider>
        <EmployeeProvider>
          {/* 💡 [수정 1] 거대했던 TodoProvider 기둥을 여기서 제거했습니다! */}
          <HeaderBar setOpen={setOpen} />
          <SiderBar open={open} />
          <Content
            open={open}
            onClick={() => {
              if (open) {
                setOpen(false)
              }
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />           
              <Route path="/todo" element={
                <TodoProvider>
                  <TodoPage />
                </TodoProvider>
              } /> 
              <Route path="/employee" element={<EmployeePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Content>
        </EmployeeProvider>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App;

/* styled-components */
const Content = styled.div`
  min-height: calc(100vh - 70px);
  background-color: #f3f4f6;
  padding: 90px 20px 20px 20px;
  margin-left: ${({ open }) => (open ? '220px' : '0')};
  transition: 0.3s;
`