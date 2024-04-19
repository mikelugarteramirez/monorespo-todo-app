import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { ITask } from '../../interfaces/ITasks.interface';

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
    @Input() task!: ITask;

    @Output() clickCardEvent: EventEmitter<ITask> = new EventEmitter();

    clickCard() {
        this.clickCardEvent.emit(this.task);
    }
}
