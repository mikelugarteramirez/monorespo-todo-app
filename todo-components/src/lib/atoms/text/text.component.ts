import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'atoms-text',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<div [ngClass]="[type, color, size]">
        <ng-content></ng-content>
    </div>`,
    styleUrl: './text.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
    @Input() type: '' | 'textplain' | 'h1' | 'h2' | 'fade' = 'textplain';
    @Input() color: '' | 'dark' | 'light' = 'dark';
    @Input() size: '' | 'small' | 'medium' | 'large' = 'medium';
}
