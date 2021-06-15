import React from 'react'
import styled from 'styled-components'

const TaskContainer = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`
const Status = styled.div`
  display: flex;
  gap: 3px;
`
const StatusBar = styled.span`
  width: 40px;
  height: 5px;
  background-color: ${(p) => p.color};
  border-radius: 5px;
`
const Content = styled.div`
  font-size: 16px;
`
const Bottom = styled.div``
let x = 5

const Task = () => {
  return (
    <TaskContainer>
      <Status>
        <StatusBar color={'#6cdbeb'} /> <StatusBar color={'#65dfc9'} />
      </Status>
      <Content>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, maxime.
        Lorem ipsum dolor sit amet.
      </Content>
      <Bottom />
    </TaskContainer>
  )
}

export default Task
