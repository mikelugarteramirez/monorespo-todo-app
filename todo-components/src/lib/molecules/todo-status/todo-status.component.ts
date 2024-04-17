import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
    selector: 'molecules-todo-status',
    standalone: true,
    imports: [
        CommonModule,
        TextComponent
    ],
    template: `<div>
        <div class="circle"></div><atoms-text></atoms-text>
    </div>`,
    styleUrl: './todo-status.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoStatusComponent {}
