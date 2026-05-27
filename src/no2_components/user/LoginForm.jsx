import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'; 
import { UserContext } from '../../no0_context/UserContext';

const initialLoginFormState = {
    username: "", password: ""
}

const LoginForm = () => {
    const { state, dispatch } = useContext(UserContext);
    const [signInData, setSignInData] = useState(initialLoginFormState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignInData(prev => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // 💡 예외 처리 안전망 적용 및 데이터 검증 대상 타겟 확보
        const currentUsers = state?.users || [];
        
        // 고도화된 단일 객체 동치 검증 기법 적용 (.find)
        const loginUser = currentUsers.find(item => 
            item.username === signInData.username.trim() && 
            item.password === signInData.password.trim()
        );

        if (loginUser) {
            alert("로그인 성공!");
            dispatch({ type: "login", payload: loginUser });
            navigate("/");
        } else {
            alert("사용자 정보가 올바르지 않습니다.");
        }
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Card>
                <Title>로그인</Title>
                
                <InputGroup>
                    <Input
                        type="text"
                        name="username"
                        value={signInData.username}
                        onChange={handleChange}
                        placeholder='사용자 이름'
                        required
                    />
                    <Input
                        type="password"
                        name="password"
                        value={signInData.password}
                        onChange={handleChange}
                        placeholder='비밀번호'
                        required
                    />
                </InputGroup>

                <ButtonGroup>
                    <LoginButton type="submit">
                        로그인
                    </LoginButton>
                    <RegisterButton type="button" onClick={() => navigate("/register")}>
                        아직 회원이 아니신가요? 회원가입
                    </RegisterButton>
                </ButtonGroup>
            </Card>
        </FormContainer>
    )
}

export default LoginForm;

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
const LoginButton = styled(BaseButton)`
    background: #2563eb; 
    color: #ffffff; 
    &:hover {
        background: #1d4ed8;
        transform: translateY(-1px); 
    }
    &:active { transform: translateY(0); }
`
const RegisterButton = styled(BaseButton)`
    background: transparent;
    color: #64748b; 
    font-size: 14px;
    font-weight: 500;
    &:hover {
        color: #2563eb;
        background: #f1f5f9;
    }
`