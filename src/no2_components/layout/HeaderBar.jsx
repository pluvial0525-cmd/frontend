// HeaderBar.jsx
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// 💡 꼭 본인의 UserContext 경로에 맞게 가져오세요!
import { UserContext } from '../../no0_context/UserContext'; 

const HeaderBar = ({ setOpen }) => {
  const navigate = useNavigate();
  
  // 💡 핵심 수정: UserContext에서 state와 dispatch를 꺼내옵니다.
  const { state, dispatch } = useContext(UserContext);
  // state 안에 들어있는 이쁘게 고쳐둔 'isLogin'과 'username'을 구조분해 할당합니다.
  const { isLogin, username } = state;

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      dispatch({ type: "logout" });
      navigate("/"); // 로그아웃 후 메인으로 이동
    }
  };

  return (
    <HeaderContainer>
      {/* 사이드바 토글 버튼 */}
      <MenuButton onClick={() => setOpen(prev => !prev)}>
        ☰
      </MenuButton>

      <Logo onClick={() => navigate("/")}>
        🚀 MyDashboard
      </Logo>

      <NavLinks>
        {/* 💡 에러 해결 지점: 전역 상태인 isLogin 값에 따라 버튼을 스위칭합니다. */}
        {isLogin ? (
          <UserSection>
            <WelcomeMessage>✨ <strong>{username}</strong>님 환영합니다</WelcomeMessage>
            <AuthButton onClick={handleLogout}>로그아웃</AuthButton>
          </UserSection>
        ) : (
          <ButtonGroup>
            <AuthButton onClick={() => navigate("/login")}>로그인</AuthButton>
            <AuthButton onClick={() => navigate("/register")} $primary>회원가입</AuthButton>
          </ButtonGroup>
        )}
      </NavLinks>
    </HeaderContainer>
  );
};

export default HeaderBar;

// --- Styled Components 영역 (프로젝트 스타일에 맞게 가공해 쓰세요!) ---

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 1000;
  box-sizing: border-box;
`

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #334155;
  padding: 8px;
  border-radius: 8px;
  
  &:hover {
    background-color: #f1f5f9;
  }
`

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #0f172a;
  cursor: pointer;
  margin-left: 12px;
  flex: 1;
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const WelcomeMessage = styled.span`
  font-size: 14px;
  color: #475569;
  strong {
    color: #4f46e5;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

const AuthButton = styled.button`
  border: ${props => props.$primary ? 'none' : '1px solid #cbd5e1'};
  background-color: ${props => props.$primary ? '#4f46e5' : '#ffffff'};
  color: ${props => props.$primary ? '#ffffff' : '#334155'};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$primary ? '#4338ca' : '#f8fafc'};
    border-color: ${props => props.$primary ? '#4338ca' : '#94a3b8'};
  }
`