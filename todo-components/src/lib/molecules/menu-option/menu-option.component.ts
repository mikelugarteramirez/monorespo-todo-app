import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'molecules-menu-option',
    standalone: true,
    imports: [
        CommonModule, TextComponent, MatIconModule
    ],
    template: `
    <div class="container" [ngClass]="{selected}">
        <mat-icon class="icon" aria-hidden="false" fontIcon="view_list"></mat-icon>
        <atoms-text>{{textOption}}</atoms-text>
    </div>`,
    styleUrl: './menu-option.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuOptionComponent {
    @Input() textOption: string = '';
    @Input() iconName: string = '';
    @Input() selected: boolean = true;
}
