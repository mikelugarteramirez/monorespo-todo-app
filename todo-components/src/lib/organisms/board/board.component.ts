import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DragDropColumnComponent } from '../../molecules/drag-drop-column/drag-drop-column.component';
import { IListColumns } from '../../interfaces/ITasks.interface';

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
}
