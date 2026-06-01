import React, { useEffect } from 'react'
import TodoListChild from './TodoListChild'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { todoAllGetSlice } from '../../no3_store/slices/todoSlice';

const TodoList = () => {
  const { todoList } = useSelector(state => state.todo || state.todoSlice || { todoList: [] });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoAllGetSlice())
  }, [dispatch]) // 💡 오류 수정: 괄호 바깥에 혼자 있던 의존성 배열을 내부로 올바르게 편입

  return (
    <Container>
      {
        todoList && todoList.map(item => (
          <TodoListChild
            key={item.id}
            item={item}
          />
        ))
      }
    </Container>
  )
}

export default TodoList

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`