import React, { FC, useState } from 'react'
import styled from 'styled-components'

type TaskProps = {
  index: number
  content: String
  handleRemoveTask: (index: number) => void
}

const Task: FC<TaskProps> = ({ index, content, handleRemoveTask }) => {
  return (
    <TaskContainer>
      <Status>
        <StatusBar color={'#6cdbeb'} /> <StatusBar color={'#65dfc9'} />{' '}
        <RemoveTask onClick={() => handleRemoveTask(index)}>X</RemoveTask>
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
