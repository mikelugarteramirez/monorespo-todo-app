import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DragDropColumnComponent } from '../../molecules/drag-drop-column/drag-drop-column.component';
import { IDragDropInfoContainers, IListColumns } from '../../interfaces/ITasks.interface';

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
    @Input() listColumns!: IListColumns[];
    @Output() changeStatusTask: EventEmitter<IDragDropInfoContainers> = new EventEmitter();

    changeTasksDroped(information: IDragDropInfoContainers) {
        this.changeStatusTask.emit(information)
    }
}
