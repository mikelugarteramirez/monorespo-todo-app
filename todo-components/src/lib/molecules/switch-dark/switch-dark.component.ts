import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SwitchComponent } from '../../atoms/switch/switch.component';

@Component({
    selector: 'molecules-switch-dark',
    standalone: true,
    imports: [
        CommonModule, SwitchComponent,
    ],
    template: `<div>
        <span>Dark</span><atoms-switch></atoms-switch><span>Light</span>
    </div>`,
    styleUrl: './switch-dark.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchDarkComponent {
}
