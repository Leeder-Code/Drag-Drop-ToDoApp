import React, { FC, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import styled from 'styled-components'

const Task = ({ index, task }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Status>
            <StatusBar color={'#6cdbeb'} /> <StatusBar color={'#65dfc9'} />{' '}
            <RemoveTask>X</RemoveTask>
          </Status>
          <Content>{task.content}</Content>
          <Bottom />
        </TaskContainer>
      )}
    </Draggable>
  )
}

export default Task

const TaskContainer = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  cursor: pointer !important;
  :hover {
    opacity: 0.7;
  }
`
const Status = styled.div`
  display: flex;
  gap: 3px;
  position: relative;
`
const StatusBar = styled.span`
  width: 40px;
  height: 5px;
  background-color: ${(p) => p.color};
  border-radius: 5px;
`
const RemoveTask = styled.button`
  padding: 5px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: none;
  position: absolute;
  cursor: inherit;
  right: 5px;
`
const Content = styled.div`
  font-size: 16px;
`
const Bottom = styled.div`
  display: flex;
  padding: 10px 0px;
`
