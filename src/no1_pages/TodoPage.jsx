import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../no0_context/TodoContext';
import TodoInsert from '../no2_components/todo/TodoInsert';
import TodoListChild from '../no2_components/todo/TodoListChild';

const TodoPage = () => {
  const { state } = useContext(TodoContext);

  return (
    <PageWrapper>
      <Title>🎯 나의 할 일 관리</Title>
      
      <TodoInsert />
      <ListContainer>
        {state.todoList.length === 0 ? (
          <EmptyText>등록된 할 일이 없습니다. 👍</EmptyText>
        ) : (
          state.todoList.map(item => (
            <TodoListChild key={item.id} item={item} />
          ))
        )}
      </ListContainer>
    </PageWrapper>
  );
};

export default TodoPage;

/* styled-components */
const PageWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 0;
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 24px;
`;
const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const EmptyText = styled.p`
  text-align: center;
  color: #94a3b8;
  padding: 40px 0;
`;