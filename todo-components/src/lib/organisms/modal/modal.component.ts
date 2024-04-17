import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../molecules/input/input.component';
import { InputComponent as AtomInputComponent } from '../../atoms/input/input.component';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'organisms-modal',
    standalone: true,
    imports: [
        CommonModule, TextComponent, ButtonComponent, InputComponent, AtomInputComponent, FormsModule, ReactiveFormsModule
    ],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit{
    form: FormGroup = new FormGroup({
        title: new FormControl(''),
        description: new FormControl(''),
        status: new FormControl(''),
        subtasks: new FormArray([
            new FormGroup({
                subtask: new FormControl('')
            })
        ])
    })

    ngOnInit(): void {
    }

    get formSubtasks() {
        return (this.form.get('subtasks') as FormArray).controls as Array<FormGroup>;
    }

    get formSubtaskArray() {
        return (this.form.get('subtasks') as FormArray);
    }

    addSubTask() {
        this.formSubtaskArray.push(new FormGroup({
            subtask: new FormControl('')
        }));
    }

    createTask() {
        console.log(this.form.value);
    }
}
