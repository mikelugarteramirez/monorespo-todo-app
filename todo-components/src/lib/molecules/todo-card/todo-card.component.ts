import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
    selector: 'molecules-todo-card',
    standalone: true,
    imports: [
        CommonModule,
        TextComponent
    ],
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCardComponent {
    @Input() titleTask: string = '';
    @Input() totalSubTasks: number = 0;
    @Input() subTasksComplete: number = 0;
}
