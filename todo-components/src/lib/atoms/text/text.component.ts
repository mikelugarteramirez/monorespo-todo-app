import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'atoms-text',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<ng-content></ng-content>`,
    styleUrl: './text.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent { }
