import React from 'react'
import styled from 'styled-components'
import TasksContainer from '../TasksContainer/TasksContainer'
const MainContainer = styled.main`
  flex: 0.9;
  width: 80%;
  background-color: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border: 1px solid #fff;
  border-radius: 2rem;
  z-index: 2;
  padding: 25px 25px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  backdrop-filter: blur(1.7rem);
`

const Main = () => {
  return (
    <MainContainer>
      <TasksContainer tasks={[1, 2, 3, 4]} type={'To Do'} />
      <TasksContainer tasks={[1, 2]} type={'Doing'} />
      <TasksContainer tasks={[1, 2, 3]} type={'Done'} />
    </MainContainer>
  )
}

export default Main
