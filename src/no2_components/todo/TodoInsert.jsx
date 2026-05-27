import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../../no0_context/TodoContext';

const TodoInsert = () => {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    // 💡 1. 요청하신 대로 액션 타입을 'register'로 변경하여 한 줄 매핑했습니다!
    dispatch({ type: 'register', payload: { id: Date.now(), subject: text.trim(), checked: false } });

    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="오늘의 할 일을 입력하세요..." 
      />
      {/* 💡 2. 맨 밑에 선언된 이름인 <Button>과 일치하도록 태그명을 수정했습니다! */}
      <Button type="submit">등록</Button>
    </Form>
  );
};

export default TodoInsert;

/* 💅 스타일드 컴포넌트 (원래 적어주신 디자인 스타일 100% 그대로 유지) */
const Form = styled.form`
  display: flex;
  gap: 10px;
`

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  font-size: 15px;
  &:focus {
    border-color: #4f46e5;
  }
`

const Button = styled.button`
  border: none;
  background: #4f46e5;
  color: white;
  padding: 0 18px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #4338ca;
  }
`