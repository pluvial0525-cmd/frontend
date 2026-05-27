import React from 'react'
import TodoListChild from './TodoListChild'
import styled from 'styled-components'

const TodoList = ({todoList, setState}) => {
  return (
    <ListBox>

        {todoList?.map(item => (

            <TodoListChild
                key={item.id}
                item={item}
                setState={setState}
            />

        ))}

    </ListBox>
  )
}

export default TodoList

const ListBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  margin-top: 20px;
`