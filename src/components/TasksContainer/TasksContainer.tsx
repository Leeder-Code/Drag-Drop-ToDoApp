import React, { FC, useState } from 'react'
import styled from 'styled-components'

import Task from '../Task/Task'

type TasksContainerProps = { type: string; tasks: string[] }

const TasksContainer: FC<TasksContainerProps> = ({ type, tasks }) => {
  const [taskContent, setTaskContent] = useState('')
  const [tasksList, setTaskList] = useState(tasks)

  const handleAddTaskClick = () => {
    setTaskList((prev) => [...prev, taskContent])
    setTaskContent('')
  }
  const handleRemoveTask = (index: number): void => {
    setTaskList((prev) => prev.filter((i, itemIndex) => itemIndex !== index))
  }

  const tasksListComponent = tasksList.map((i: string, index) => (
    <Task
      handleRemoveTask={handleRemoveTask}
      key={index}
      content={i}
      index={index}
    />
  ))

  return (
    <TasksContainerStyle>
      <Title>{type}</Title>
      <TaskBoard>{tasksListComponent}</TaskBoard>
      <AddTask>
        <AddTaskButton onClick={handleAddTaskClick}>
          <AddTaskPlus />
        </AddTaskButton>
        <AddTaskInput
          value={taskContent}
          onChange={(e) => setTaskContent(e.target.value)}
        />
      </AddTask>
    </TasksContainerStyle>
  )
}

export default TasksContainer

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
const TaskBoard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px;
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
  cursor: pointer;
`
const AddTaskPlus = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 2px;
  width: 13px;
  position: relative;
  border-radius: 3px;
  ::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 13px;
    border-radius: 3px;
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
