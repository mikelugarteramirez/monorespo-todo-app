import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SwitchComponent } from '../../atoms/switch/switch.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'molecules-switch-dark',
    standalone: true,
    imports: [
        CommonModule, SwitchComponent, MatIconModule
    ],
    template: `<div>
        <span><mat-icon class="icon" aria-hidden="false" fontIcon="dark_mode"></mat-icon></span>
        <atoms-switch></atoms-switch>
        <span><mat-icon class="icon" aria-hidden="false" fontIcon="wb_sunny"></mat-icon></span>
    </div>`,
    styleUrl: './switch-dark.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchDarkComponent {
}
