import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Task from '../Task/Task'

const TasksContainer = ({ column, tasks }) => {
  const [taskContent, setTaskContent] = useState('')

  const tasksListComponents = tasks.map((task, index) => (
    <Task key={task.id} task={task} index={index} />
  ))

  return (
    <TasksContainerStyle>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskBoard ref={provided.innerRef} {...provided.droppableProps}>
            {tasksListComponents}
            {provided.placeholder}
          </TaskBoard>
        )}
      </Droppable>
      <AddTask>
        <AddTaskButton>
          <AddTaskPlus />
        </AddTaskButton>
        <AddTaskInput
          placeholder="work in progress"
          disabled
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
