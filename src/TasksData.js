const tasksData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Finish a todo app' },
    'task-2': { id: 'task-2', content: 'Create a working drag & drop' },
    'task-3': { id: 'task-3', content: 'Make a simple layout' },
    'task-4': { id: 'task-4', content: 'Push on github' },
    'task-5': { id: 'task-5', content: 'Make a navbar' },
    'task-6': { id: 'task-6', content: 'Create add/delete task function' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      tasksId: ['task-5'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Doing',
      tasksId: ['task-6'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      tasksId: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
}
export default tasksData
