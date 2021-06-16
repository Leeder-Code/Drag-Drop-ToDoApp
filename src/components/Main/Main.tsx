import React, { FC, useState } from 'react'
import styled from 'styled-components'
import TasksContainer from '../TasksContainer/TasksContainer'

const Main: FC = () => {
  const toDoTasks: string[] = []
  const doingTasks: string[] = []
  const doneTasks: string[] = []

  return (
    <MainContainer>
      <TasksContainer tasks={toDoTasks} type={'To Do'} />
      <TasksContainer tasks={doingTasks} type={'Doing'} />
      <TasksContainer tasks={doneTasks} type={'Done'} />
    </MainContainer>
  )
}

export default Main

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
