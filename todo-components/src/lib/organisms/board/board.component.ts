import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DragDropColumnComponent } from '../../molecules/drag-drop-column/drag-drop-column.component';
import { IDragDropInfoContainers, IListColumns, ITask } from '../../interfaces/ITasks.interface';

@Component({
    selector: 'organisms-board',
    standalone: true,
    imports: [
        CommonModule,
        DragDropColumnComponent
    ],
    templateUrl: 'board.component.html',
    styleUrl: './board.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
    @Input() listColumns: IListColumns[] | undefined;
    @Output() changeStatusTask: EventEmitter<IDragDropInfoContainers> = new EventEmitter();
    @Output() clickCardEvent: EventEmitter<ITask> = new EventEmitter();


    changeTasksDroped(information: IDragDropInfoContainers) {
        this.changeStatusTask.emit(information)
    }

    clickOneCard(task: ITask) {
        this.clickCardEvent.emit(task);
      }
}
