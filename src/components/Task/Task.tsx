import React, { FC, useState } from 'react'
import styled from 'styled-components'

interface TaskProps {
  content: string[]
}

const Task: FC<{ content: string }> = ({ content }) => {
  const onDragStart = (e) => {
    const target = e.target
    target.classList.add('dragging')
  }
  const onDragEnd = (e) => {
    const target = e.target
    target.classList.remove('dragging')
  }
  const onDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleRemove = () => {}

  return (
    <TaskContainer
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      draggable
      className="task"
    >
      <Status>
        <StatusBar color={'#6cdbeb'} /> <StatusBar color={'#65dfc9'} />{' '}
        <RemoveTask onClick={handleRemove}>X</RemoveTask>
      </Status>
      <Content>{content}</Content>
      <Bottom />
    </TaskContainer>
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
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  &.dragging {
    opacity: 0.4;
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
  right: 5px;
`
const Content = styled.div`
  font-size: 16px;
`
const Bottom = styled.div`
  display: flex;
  padding: 10px 0px;
`