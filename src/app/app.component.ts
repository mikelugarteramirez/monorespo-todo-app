import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBoard, IDragDropInfoContainers, IModalInformation, INewBoard, ITask } from '@todoapp/todo-components/interfaces';
import { DragDropColumnComponent, TopMenuComponent } from '@todoapp/todo-components/molecules';
import { BoardComponent, LateralMenuComponent, ModalComponent } from '@todoapp/todo-components/organisms';
import { Subscription } from 'rxjs';
import { selectBoardState, selectSelectedBoard } from './store/selectors/board.selectors';
import { createBoard, setBoardChangeStatusTask } from './store/actions/board.actions';
import { info, removeReference } from 'src/utils/utils';
import { IStateMenu } from './store/interfaces/IMenuStore.interface';
import { selectMenuInformation } from './store/selectors/menu.selectors';
import { setShowModal, setStatusOptions } from './store/actions/menu.actions';

@Component({
  standalone: true,
  imports: [LateralMenuComponent, TopMenuComponent, BoardComponent, DragDropColumnComponent, ModalComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {

  private store = inject(Store);

  boards$!: Subscription;
  
  selectedOption$!: Subscription;

  menu$!: Subscription;

  selectedOption: IBoard | undefined;

  boards!: IBoard[];

  menuInfo!: IStateMenu;

  task!: ITask|undefined;

  ngOnInit(): void {

    this.store.dispatch(createBoard({boards: info}));

    this.store.dispatch(setStatusOptions({payload: ['todo', 'doing', 'done']}));

    this.boards$ = this.store.select(selectBoardState).subscribe(data => {
      this.boards = removeReference(data.boards);
    });

    this.selectedOption$ = this.store.select(selectSelectedBoard).subscribe(data => {
      this.selectedOption = removeReference(data);
    });

    this.menu$ = this.store.select(selectMenuInformation).subscribe(data => {
      this.menuInfo = removeReference(data);
    });
  }

  async clickOption(option: string) {
    this.boards = await this.boards.map(board => {
      if(board.name == option) {
        board.active = true;
      }else {
        board.active = false;
      }
      return board;
    });

    this.refreshBoards();
  }

  async changeStatusTask(information: IDragDropInfoContainers) {
    await this.boards.forEach(board => {
      if(this.selectedOption?.name == board.name) {
        board.columns.forEach(columns => {
          if(columns.idList === information.dragContainer.id ) {
            columns.todos = information.dragContainer.data;
          }else if(columns.idList === information.dropContainer.id) {
            columns.todos = information.dropContainer.data;
          }
        })
      }
    });
    this.refreshBoards();
  }

  refreshBoards() {
    this.store.dispatch(setBoardChangeStatusTask({boards: removeReference(this.boards)}))
  }

  createBoard() {
    this.switchModalShow(true, 'form-board');
  }

  createTask() {
    this.switchModalShow(true, 'form');
  }

  switchModalShow(show: boolean, type: 'form' | 'detail' | 'form-board' = 'form') {
    this.store.dispatch(setShowModal({payload: {show, type}}));
  }

  async closeModal(info: IModalInformation) {
    this.switchModalShow(false);
    if(info.status == 'complete') {
      this.boards = await this.boards.map((board) => {
        if(board.name == this.selectedOption?.name) {
          board.columns[0].todos.push(info.data)
        }
        return board;
      });
      this.refreshBoards();
    }else if(info.status == 'update') {
      this.boards = await this.boards.map(board => {
        if(board.name == this.selectedOption?.name) {
          const column =  board.columns.find((column) => column.idList == info.data.status);
          column?.todos.push(info.data);
        }
        return board;
      }) 
    }
  }

  async closeModalBoard(info: INewBoard) {
    this.switchModalShow(false);
    if(info.status == 'board') {
      const newBoard = {
        ...info.data, 
        active: true,
        icon: 'view_list',
        columns: [{
            listsIds: ['listColumn2', 'listColumn3'],
            idList: 'listColumn1',
            status: 'todo',
            todos: []
          },
          {
            listsIds: ['listColumn1', 'listColumn3'],
            idList: 'listColumn2',
            status: 'doing',
            todos: []
          },
          {
            listsIds: ['listColumn1', 'listColumn2'],
            idList: 'listColumn3',
            status: 'done',
            todos: []
          }
        ]
      };
      this.boards.push(newBoard);
      this.refreshBoards();
    }
  }

  clickOneCard(task: ITask) {
    this.task = task;
    this.switchModalShow(true, 'detail');
  }

  ngOnDestroy(): void {
      this.boards$.unsubscribe();
      this.selectedOption$.unsubscribe();
  }
}
