import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBoard, IDragDropInfoContainers } from '@todoapp/todo-components/interfaces';
import { DragDropColumnComponent, TopMenuComponent } from '@todoapp/todo-components/molecules';
import { BoardComponent, LateralMenuComponent, ModalComponent } from '@todoapp/todo-components/organisms';
import { Subscription } from 'rxjs';
import { selectBoardState, selectSelectedBoard } from './+state/board.selectors';
import { createBoard, setBoardChangeStatusTask } from './+state/board.actions';
import { info, removeReference } from 'src/utils/utils';

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

  selectedOption: IBoard | undefined;

  boards!: IBoard[];

  ngOnInit(): void {

    this.store.dispatch(createBoard({boards: info}));

    this.boards$ = this.store.select(selectBoardState).subscribe(data => {
      this.boards = removeReference(data.boards);
    });

    this.selectedOption$ = this.store.select(selectSelectedBoard).subscribe(data => {
      this.selectedOption = removeReference(data);
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

    this.store.dispatch(setBoardChangeStatusTask({boards: removeReference(this.boards)}))
    
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
    this.store.dispatch(setBoardChangeStatusTask({boards: removeReference(this.boards)}));
  }

  ngOnDestroy(): void {
      this.boards$.unsubscribe();
      this.selectedOption$.unsubscribe();
  }
}
