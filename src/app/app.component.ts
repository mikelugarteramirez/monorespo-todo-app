import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IBoard } from '@todoapp/todo-components/interfaces';
import { DragDropColumnComponent, TopMenuComponent } from '@todoapp/todo-components/molecules';
import { BoardComponent, LateralMenuComponent } from '@todoapp/todo-components/organisms';

@Component({
  standalone: true,
  imports: [RouterModule,
    LateralMenuComponent, TopMenuComponent, BoardComponent, DragDropColumnComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  boards: IBoard[] = [
    {
      name: 'Platform Launch',
      active: true,
      icon: 'view_list',
      columns: [{
          listsIds: ['listColumn2', 'listColumn3'],
          idList: 'listColumn1',
          title: 'Todo',
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
          title: 'Todo 2',
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
          title: 'Todo 3',
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
          title: 'Todo',
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
          title: 'Todo 2',
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
          title: 'Todo 3',
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
          title: 'Todo',
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
          title: 'Todo 2',
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
          title: 'Todo 3',
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
  ];

  selectedOption!: IBoard;

  ngOnInit(): void {
      this.selectedOption = this.boards[0];
  }

  clickOption(option: string) {
    this.boards = this.boards.map(board => {
      if(board.name == option) {
        board.active = true;
        this.selectedOption = board;
      }else {
        board.active = false;
      }
      return board;
    })
    
  }
}
