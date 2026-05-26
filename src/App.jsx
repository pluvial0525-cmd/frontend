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

function App() {
  // 💡 수정 1: 주석을 풀고 사이드바 열림 상태를 정상적으로 선언합니다.
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* 💡 수정 2: 모든 컴포넌트(Header, Sidebar, Pages)가 전역 상태를 공유할 수 있도록 
          Provider들을 최상단에 올바른 짝으로 감싸줍니다. */}
      <UserProvider>
        <EmployeeProvider>
          
          {/* HeaderBar에서 사이드바를 열고 닫을 수 있게 setOpen을 전달합니다. */}
          <HeaderBar setOpen={setOpen} />
          
          {/* 현재 열림 상태를 사이드바에 전달합니다. */}
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
            {/* 💡 수정 3: Routes 바로 아래에는 오직 Route만 깔끔하게 오도록 태그 꼬임 문제를 완벽히 해결했습니다. */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/todo" element={<TodoPage />} />
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
  
  /* 기본 패딩 20px + 헤더 고정 높이 70px = 총 90px 주어 짤림 현상 해결 */
  padding: 90px 20px 20px 20px;

  /* 사이드바 열림에 따른 여백 조절 */
  margin-left: ${({ open }) => (open ? '220px' : '0')};
  transition: 0.3s;
`