import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'atoms-input',
    standalone: true,
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: FormGroupDirective
        }
    ],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule
    ],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
    @Input() type: 'text' | 'textarea' | 'select' = 'text';
    @Input() options: any[] = ['example', 'example2'];
    @Input() controlName!: string;

}
