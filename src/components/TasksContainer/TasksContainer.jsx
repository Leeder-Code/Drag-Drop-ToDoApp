import React, { useState } from 'react'
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

const TasksContainer = ({ type, tasks }) => {
  const [taskContent, setTaskContent] = useState('')
  const [tasksList, setTaskList] = useState(tasks)
  const onDragOver = (e) => {
    e.preventDefault()
    const afterElement = getDragAfterElement(e.target, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      e.target.appendChild(draggable)
    } else {
      e.target.insertBefore(draggable, afterElement)
    }
  }

  const getDragAfterElement = (container, y) => {
    const draggableElements = [
      ...container.querySelectorAll('.task:not(.dragging)'),
    ]
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element
  }
  const handleAddTaskClick = () => {
    setTaskList((prev) => [...prev, taskContent])
    setTaskContent('')
  }
  const tasksListComponent = tasksList.map((i, index) => (
    <Task key={index} content={i} />
  ))
  return (
    <TasksContainerStyle>
      <Title>{type}</Title>
      <TaskBoard onDragOver={onDragOver}>{tasksListComponent}</TaskBoard>
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
