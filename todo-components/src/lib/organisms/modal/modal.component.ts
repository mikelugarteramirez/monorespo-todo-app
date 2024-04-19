import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TextComponent } from '../../atoms/text/text.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../molecules/input/input.component';
import { InputComponent as AtomInputComponent } from '../../atoms/input/input.component';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IModalInformation, INewBoard, ITask } from '../../interfaces/ITasks.interface';

@Component({
    selector: 'organisms-modal',
    standalone: true,
    imports: [
        CommonModule, TextComponent, ButtonComponent, 
        InputComponent, AtomInputComponent, FormsModule, 
        ReactiveFormsModule, MatCheckboxModule
    ],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit{
    @Input() type!: 'form' | 'detail' | 'form-board';
    @Input() detail?: ITask;
    @Input() menuOptions: string[] = [];

    @Output() formResultValue: EventEmitter<IModalInformation> = new EventEmitter();
    @Output() formResultBoardValue: EventEmitter<INewBoard> = new EventEmitter();

    form: FormGroup = new FormGroup({
        title: new FormControl(''),
        description: new FormControl(''),
        status: new FormControl(''),
        subTasks: new FormArray([
            new FormGroup({
                title: new FormControl(''),
                status: new FormControl(false)
            })
        ])
    })

    formBoard: FormGroup = new FormGroup({
        name: new FormControl('')
    })

    ngOnInit(): void {
        if(this.detail) {
            this.form = new FormGroup({
                title: new FormControl(this.detail.title),
                description: new FormControl(this.detail.description),
                status: new FormControl(this.detail.status),
                subTasks: new FormArray(this.detail.subTasks.map(subTask => {
                    return new FormGroup({
                        title: new FormControl(subTask.title),
                        status: new FormControl(subTask.status)
                    })
                }))
            })
        }
    }

    get formSubtasks() {
        return (this.form.get('subTasks') as FormArray).controls as Array<FormGroup>;
    }

    get formSubtaskArray() {
        return (this.form.get('subTasks') as FormArray);
    }

    addSubTask() {
        this.formSubtaskArray.push(new FormGroup({
            title: new FormControl(''),
            status: new FormControl(false)
        }));
    }

    updateTask() {
        this.formResultValue.emit({status: 'update', data: this.form.value});
    }

    createTask() {
        this.formResultValue.emit({status: 'complete', data: this.form.value});
    }

    createBoard() {
        this.formResultBoardValue.emit({status: 'board', data: this.formBoard.value});
    }

    closeTask() {
        this.formResultValue.emit({status: 'close', data: this.form.value});
    }
}
