import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBoard, IDragDropInfoContainers } from '@todoapp/todo-components/interfaces';
import { DragDropColumnComponent, TopMenuComponent } from '@todoapp/todo-components/molecules';
import { BoardComponent, LateralMenuComponent, ModalComponent } from '@todoapp/todo-components/organisms';
import { Observable } from 'rxjs';
import { BoardService } from 'src/services/board.service';
import { selectBoardState } from './+state/board.selectors';
import { BoardState } from './+state/board.reducer';
import { createBoard, setBoardChangeStatusTask } from './+state/board.actions';
import { info, removeReference } from 'src/utils/utils';

@Component({
  standalone: true,
  imports: [LateralMenuComponent, TopMenuComponent, BoardComponent, DragDropColumnComponent, ModalComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  boardService = inject(BoardService);
  private store = inject(Store);

  boards$!: Observable<BoardState>;

  selectedOption!: IBoard;

  boards: IBoard[] = [] = info;

  ngOnInit(): void {
    this.boards$ = this.store.select(selectBoardState);
    this.store.dispatch(createBoard({boards: info.slice()}));

    this.boards$.subscribe(data => {
      this.boards = removeReference(data.boards);
    });
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

  changeStatusTask(information: IDragDropInfoContainers) {
    this.boards.forEach(board => {
      if(this.selectedOption.name == board.name) {
        board.columns.forEach(columns => {
          if(columns.idList === information.dragContainer.id ) {
            columns.todos = information.dragContainer.data;
          }else if(columns.idList === information.dropContainer.id) {
            columns.todos = information.dropContainer.data;
          }
        })
      }
    });
    this.store.dispatch(setBoardChangeStatusTask({boards: this.boards}));
  }
}
