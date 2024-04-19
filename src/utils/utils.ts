export const info = [
    {
      name: 'Platform Launch',
      active: true,
      icon: 'view_list',
      columns: [{
          listsIds: ['listColumn2', 'listColumn3'],
          idList: 'listColumn1',
          status: 'todo',
          todos: [
            {
              title: 'Tarea 1',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 2',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 3',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            }
          ]
        },
        {
          listsIds: ['listColumn1', 'listColumn3'],
          idList: 'listColumn2',
          status: 'doing',
          todos: [
            {
              title: 'Tarea 1',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 2',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 3',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            }
          ]
        },
        {
          listsIds: ['listColumn1', 'listColumn2'],
          idList: 'listColumn3',
          status: 'done',
          todos: [
            {
              title: 'Tarea 1',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 2',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 3',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            }
          ]
        }
      ]
    },
    {
      name: 'Marketing Plan',
      active: false,
      icon: 'view_list',
      columns: [{
          listsIds: ['listColumn2', 'listColumn3'],
          idList: 'listColumn1',
          status: 'todo',
          todos: [
            {
              title: 'Tarea 1',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 2',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 3',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            }
          ]
        },
        {
          listsIds: ['listColumn1', 'listColumn3'],
          idList: 'listColumn2',
          status: 'doing',
          todos: [
            {
              title: 'Tarea 1',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 2',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 3',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            }
          ]
        },
        {
          listsIds: ['listColumn1', 'listColumn2'],
          idList: 'listColumn3',
          status: 'done',
          todos: [
            {
              title: 'Tarea 1',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 2',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 3',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            }
          ]
        }
      ]
    },
    {
      name: 'Road Map',
      active: false,
      icon: 'view_list',
      columns: [{
          listsIds: ['listColumn2', 'listColumn3'],
          idList: 'listColumn1',
          status: 'todo',
          todos: [
            {
              title: 'Tarea 1',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 2',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 3',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            }
          ]
        },
        {
          listsIds: ['listColumn1', 'listColumn3'],
          idList: 'listColumn2',
          status: 'doing',
          todos: [
            {
              title: 'Tarea 1',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 2',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 3',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            }
          ]
        },
        {
          listsIds: ['listColumn1', 'listColumn2'],
          idList: 'listColumn3',
          status: 'done',
          todos: [
            {
              title: 'Tarea 1',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 2',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            },
            {
              title: 'Tarea 3',
              description: 'La tarea trata sobre',
              status: 'todo',
              subTasks: []
            }
          ]
        }
      ]
    }
]

export const removeReference = (data: any) => {
  return JSON.parse(JSON.stringify(data))
}