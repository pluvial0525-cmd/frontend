import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { UserContext } from '../../no0_context/UserContext';

const initialFormState = {
  username: "", 
  password: "", 
  confirmPassword: ""
}

const RegisterForm = () => {
  const { dispatch } = useContext(UserContext);
  const [signUpData, setSignUpData] = useState(initialFormState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // 1. 공백 차단 검증
    if (!signUpData.username.trim() || !signUpData.password.trim()) {
      alert("사용자 이름과 비밀번호를 입력해주세요.");
      return;
    }

    // 2. 비밀번호 확인 일치 검증
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 3. 안전한 단층 구조 데이터 패키징 송신
    const newUser = {
      id: Date.now(),
      username: signUpData.username.trim(),
      password: signUpData.password.trim()
    };

    dispatch({ type: "register", payload: newUser });
    
    alert("회원가입이 완료되었습니다!");
    setSignUpData(initialFormState);
    navigate("/login"); 
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Card>
        <Title>회원등록</Title>
        
        <InputGroup>
          <Input
            type="text"
            name="username"
            value={signUpData.username}
            onChange={handleChange}
            placeholder='사용자 이름'
            required
          />
          <Input
            type="password"
            name="password"
            value={signUpData.password}
            onChange={handleChange}
            placeholder='비밀번호'
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            value={signUpData.confirmPassword}
            onChange={handleChange}
            placeholder='비밀번호 확인'
            required
          />
        </InputGroup>
        
        <ButtonGroup>
          <RegisterButton type="submit">
            가입하기
          </RegisterButton>
          <CancelButton type="button" onClick={() => navigate("/login")}>
            이미 계정이 있으신가요? 로그인
          </CancelButton>
        </ButtonGroup>
      </Card>
    </FormContainer>
  )
}

export default RegisterForm;

/* ✨ Styled Components */
const FormContainer = styled.form`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8fafc; 
`
const Card = styled.div`
    width: 420px;
    background: white;
    padding: 48px 40px;
    border-radius: 20px; 
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    border: 1px solid #f1f5f9;
`
const Title = styled.h2`
    text-align: center;
    margin-bottom: 36px;
    color: #0f172a; 
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -0.5px;
`
const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px; 
    margin-bottom: 28px;
`
const Input = styled.input`
    width: 100%;
    padding: 14px 16px; 
    border: 1px solid #cbd5e1; 
    border-radius: 12px; 
    font-size: 15px;
    outline: none;
    background-color: #f8fafc;
    transition: all 0.2s ease-in-out;
    &::placeholder { color: #94a3b8; }
    &:focus {
        background-color: #ffffff;
        border-color: #2563eb;
        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12); 
    }
`
const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`
const BaseButton = styled.button`
    width: 100%; 
    border: none;
    padding: 14px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600; 
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`
const RegisterButton = styled(BaseButton)`
    background: #2563eb; 
    color: #ffffff; 
    &:hover {
        background: #1d4ed8;
        transform: translateY(-1px);
    }
    &:active { transform: translateY(0); }
`
const CancelButton = styled(BaseButton)`
    background: transparent;
    color: #64748b; 
    font-size: 14px;
    font-weight: 500;
    &:hover {
        color: #2563eb;
        background: #f1f5f9;
    }
`