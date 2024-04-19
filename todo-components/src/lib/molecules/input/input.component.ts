import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputComponent as AtomInputComponent } from '../../atoms/input/input.component';
import { TextComponent } from '../../atoms/text/text.component';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'molecules-input',
    standalone: true,
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: FormGroupDirective
        }
    ],
    imports: [
        CommonModule, InputComponent, AtomInputComponent, TextComponent,
    ],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
    @Input() type: 'text' | 'textarea' | 'select' = 'text';
    @Input() label!: string;
    @Input() controlName!: string;
    @Input() optionsSelect: string[] = [];
    
}
