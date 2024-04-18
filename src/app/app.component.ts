import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IBoard } from '@todoapp/todo-components/interfaces';
import { DragDropColumnComponent, TopMenuComponent } from '@todoapp/todo-components/molecules';
import { BoardComponent, LateralMenuComponent, ModalComponent } from '@todoapp/todo-components/organisms';
import { BoardService } from 'src/services/board.service';

@Component({
  standalone: true,
  imports: [RouterModule,
    LateralMenuComponent, TopMenuComponent, BoardComponent, DragDropColumnComponent, ModalComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  boardService = inject(BoardService);

  selectedOption!: IBoard;

  boards: IBoard[] = [];

  ngOnInit(): void {
    this.boardService.board.subscribe(boards => {
      this.boards = boards;
    })
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
