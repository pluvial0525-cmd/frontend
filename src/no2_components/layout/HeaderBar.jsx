import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const HeaderBar = ({ loginMode, setLoginMode}) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
     
      setLoginMode({
        isLogin: false,
        username: ""
      });
      alert("로그아웃 되었습니다.");
      navigate("/login"); 
    
  };

  return (
    <Container>
      <LeftSection>
        <HamburgerButton onClick={() => setOpen?.(prev => !prev)}>
          ☰
        </HamburgerButton>
        <Logo onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
          My시스템
        </Logo>
      </LeftSection>

      <ButtonWrap>
        {loginMode.isLogin ? (
          <UserWrap>
            <WelcomeText>
              <span>{loginMode.username}</span>님 환영합니다
            </WelcomeText>
            <LogoutButton onClick={handleLogout}>
              로그아웃
            </LogoutButton>
          </UserWrap>
        ) : (
          <>
            <HeaderButton onClick={() => navigate("/login")}>
              로그인
            </HeaderButton>

            <HeaderButton onClick={() => navigate("/register")}>
              회원가입
            </HeaderButton>
          </>
        )}
      </ButtonWrap>
    </Container>
  )
}

export default HeaderBar

/* ✨ Styled Components */
const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: white;
  border-bottom: 1px solid #f1f5f9; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05); 
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #334155;
  font-size: 24px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    background-color: #f1f5f9;
  }
`

const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.5px;
`

const ButtonWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const WelcomeText = styled.span`
  font-size: 14px;
  color: #475569;
  font-weight: 500;
  
  span {
    font-weight: 700;
    color: #0f172a; 
  }
`

const HeaderButton = styled.button`
  border: none;
  padding: 9px 16px;
  border-radius: 10px;
  background-color: #2563eb;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const LogoutButton = styled.button`
  border: 1px solid #cbd5e1; 
  padding: 8px 14px;
  border-radius: 10px;
  background-color: #ffffff; 
  color: #64748b; 
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #ef4444; 
    border-color: #fca5a5;
    background-color: #fef2f2; 
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`