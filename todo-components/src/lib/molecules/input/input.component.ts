import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'molecules-input',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>input works!</p>`,
    styleUrl: './input.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent { }
