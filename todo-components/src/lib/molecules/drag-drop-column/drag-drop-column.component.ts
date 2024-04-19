import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
    CdkDragDrop,
    moveItemInArray,
    transferArrayItem,
    CdkDrag,
    CdkDropList,
  } from '@angular/cdk/drag-drop';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { IDragDropInfoContainers, IDragDropInformation, ITask } from '../../interfaces/ITasks.interface';
import { TodoStatusComponent } from '../todo-status/todo-status.component';

@Component({
    selector: 'molecules-drag-drop-column',
    standalone: true,
    imports: [
        CommonModule,
        CdkDropList,
        CdkDrag,
        TodoCardComponent,
        TodoStatusComponent
    ],
    templateUrl: './drag-drop-column.component.html',
    styleUrl: './drag-drop-column.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragDropColumnComponent {
    @Input() todos: ITask[] = [];
    @Input() listsIds: string[] = [];
    @Input() idList!: string | number;
    @Input() title!: string;
    @Input() dark: boolean = true;

    @Output() changeStatusTask: EventEmitter<IDragDropInfoContainers> = new EventEmitter();
    @Output() clickCardEvent: EventEmitter<ITask> = new EventEmitter();

    changeTaskListener(dragContainer: IDragDropInformation,  dropContainer: IDragDropInformation) {
      this.changeStatusTask.emit({dragContainer, dropContainer});
    }

    drop(event: CdkDragDrop<ITask[]>) {
      this.changeTaskListener(event.container, event.previousContainer);
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex,
          );
      }
    }

    clickOneCard(task: ITask) {
      this.clickCardEvent.emit(task);
    }
}
