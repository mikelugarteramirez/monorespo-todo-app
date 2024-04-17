import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
    selector: 'molecules-menu-option',
    standalone: true,
    imports: [
        CommonModule, TextComponent
    ],
    template: `<div>
        <atoms-text>{{textOption}}</atoms-text>
    </div>`,
    styleUrl: './menu-option.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuOptionComponent {
    @Input() textOption: string = '';
    @Input() iconName: string = '';
}
