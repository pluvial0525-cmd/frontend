import React, { useState } from 'react'
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline
} from "react-icons/md"
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// 💡 투두에서 쓸 액션과 Thunk들을 가져옵니다.
import { toggle, todoDeleteSlice, todoPutSlice, todoToggleSlice, select } from '../../no3_store/slices/todoSlice'
// 🚨 중복 선언 해결: 직원 슬라이스의 select는 empSelect로 겹치지 않게 이름을 바꾸어 가져옵니다!
import { select as empSelect } from '../../no3_store/slices/employeeSlice'

const TodoListChild = ({ item }) => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(item.subject)

  const handleUpdate = () => {
    // 💡 오류 수정: 먼저 수정할 대상을 지정하고 객체 형태로 제대로 담아서 보냅니다.
    dispatch(select(item.id))
    dispatch(todoPutSlice({ ...item, subject: value }))
    setEditing(false)
  }

  return (
    <Container>
      <CheckBoxArea onClick={() => {
        // 💡 오류 수정: 비동기 토글이 리덕스와 서버 양쪽에서 상태가 갱신되도록 연동
        dispatch(select(item.id))
        dispatch(todoToggleSlice({ ...item, checked: !item.checked }))
      }}>
        {
          item.checked
            ? <MdCheckBox />
            : <MdCheckBoxOutlineBlank />
        }
      </CheckBoxArea>

      <ContentArea>
        {
          editing ? (
            <EditInput
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleUpdate}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.target.blur()
                }
              }}
              autoFocus
            />
          ) : (
            <Checked
              $checked={item.checked}
              onDoubleClick={() => setEditing(true)}
            >
              {item.subject}
            </Checked>
          )
        }
      </ContentArea>

      <DeleteButton onClick={() => {
        dispatch(select(item.id))
        dispatch(todoDeleteSlice(item.id))
      }}>
        <MdRemoveCircleOutline />
      </DeleteButton>

    </Container>
  )
}

export default TodoListChild


const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: 0.2s;
  &:hover{
    transform: translateY(-2px);
  }
`
const CheckBoxArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #3b82f6;
  cursor: pointer;
`
const ContentArea = styled.div`
  flex: 1;
`
const Checked = styled.div`
  font-size: 18px;
  color: ${({ $checked }) => $checked ? "#999" : "#222"};
  text-decoration: ${({ $checked }) => $checked ? "line-through" : "none"};
  transition: 0.2s;
  cursor: pointer;
`
const EditInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  &:focus{
    border-color: #3b82f6;
  }
`
const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #ef4444;
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    transform: scale(1.1);
  }
`