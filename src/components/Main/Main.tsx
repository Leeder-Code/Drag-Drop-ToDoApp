import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import TasksContainer from '../TasksContainer/TasksContainer'
import { DragDropContext } from 'react-beautiful-dnd'
import { resetServerContext } from 'react-beautiful-dnd'
import initialData from 'src/TasksData'

const Main: FC = () => {
  const [tasksData, setTasksData] = useState(initialData)

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    const start = tasksData.columns[source.droppableId]
    const finish = tasksData.columns[destination.droppableId]
    if (start === finish) {
      const newTaskIds = Array.from(start.tasksId)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)
      const newColumn = {
        ...start,
        tasksId: newTaskIds,
      }

      setTasksData((prev) => {
        return {
          ...prev,
          columns: {
            ...prev.columns,
            [newColumn.id]: newColumn,
          },
        }
      })
    } else {
      const startTasksId = Array.from(start.tasksId)
      startTasksId.splice(source.index, 1)
      const newStart = {
        ...start,
        tasksId: startTasksId,
      }
      const finishTasksId = Array.from(finish.tasksId)
      finishTasksId.splice(destination.index, 0, draggableId)
      const newFinish = {
        ...finish,
        tasksId: finishTasksId,
      }
      setTasksData((prev) => {
        return {
          ...prev,
          columns: {
            ...prev.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
          },
        }
      })
    }
  }
  const handleAddTaskClick = (taskContent) => {}

  resetServerContext()
  const TasksContainers = tasksData.columnOrder.map((columnId) => {
    const column = tasksData.columns[columnId]
    const tasks = column.tasksId.map((taskId) => tasksData.tasks[taskId])

    return <TasksContainer key={column.id} column={column} tasks={tasks} />
  })
  return (
    <MainContainer>
      <DragDropContext onDragEnd={onDragEnd}>{TasksContainers}</DragDropContext>
    </MainContainer>
  )
}

export default Main

const MainContainer = styled.main`
  flex: 0.9;
  width: 80%;
  max-height: 84vh;
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
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
const BackDrop = styled(MainContainer)`
  backdrop-filter: blur(1.7rem);
`
