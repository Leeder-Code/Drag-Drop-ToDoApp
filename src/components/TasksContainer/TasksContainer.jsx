import React from 'react'
import styled from 'styled-components'

import Task from '../Task/Task'

const TasksContainerStyle = styled.div`
  background-color: #ffffff94;
  height: fit-content;
  padding: 10px 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Title = styled.div`
  font-weight: ${({ theme }) => theme.weight.medium};
`
const AddTask = styled.div`
  display: flex;
  gap: 10px;
`
const AddTaskButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: transparent;
  border: none;
`
const AddTaskPlus = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 2px;
  width: 13px;
  position: relative; //radius
  ::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 13px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%) rotate(90deg);
  }
`
const AddTaskInput = styled.input`
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.5)
  );
  padding: 5px;
  border: 1px solid white;
  color: rgba(0, 0, 0, 0.8);
`

const TasksContainer = ({ type, tasks }) => {
  const tasksListComponent = tasks.map((i) => <Task key={i} />)
  return (
    <TasksContainerStyle>
      <Title>{type}</Title>
      {tasksListComponent}
      <AddTask>
        <AddTaskButton>
          <AddTaskPlus />
        </AddTaskButton>
        <AddTaskInput />
      </AddTask>
    </TasksContainerStyle>
  )
}

export default TasksContainer
