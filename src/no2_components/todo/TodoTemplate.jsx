import React from 'react'
import styled from 'styled-components'

const TodoTemplate = ({children}) => {
  return (
    <Container>

      <TodoBox>

        <Title>
          일정관리
        </Title>

        <ContentBox>
          {children}
        </ContentBox>

      </TodoBox>

    </Container>
  )
}

export default TodoTemplate

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background: #f4f6f8;

  display: flex;
  justify-content: center;
  align-items: center;
`

const TodoBox = styled.div`
  width: 420px;

  background: white;

  border-radius: 20px;

  padding: 30px;

  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;

  text-align: center;

  margin-bottom: 25px;

  color: #333;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`