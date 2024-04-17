import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
    selector: 'molecules-todo-status',
    standalone: true,
    imports: [
        CommonModule,
        TextComponent
    ],
    template: `<div class="container">
        <div class="circle" [ngStyle]="{'background': color}"></div><atoms-text type="fade">{{text}}</atoms-text>
    </div>`,
    styleUrl: './todo-status.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoStatusComponent {
    @Input() text!: string;
    @Input() color: string = 'red';
}
