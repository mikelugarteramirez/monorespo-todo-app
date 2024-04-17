import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'atoms-button',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    
}
