import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'atoms-switch',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `
    <label class="switch" (click)="switchClick()">
        <span class="slider round" [ngClass]="{checked: switchStatus}"></span>
    </label>`,
    styleUrl: './switch.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent implements OnInit {
    @Input() switchValue: boolean = true;
    @Output() eventSwitch: EventEmitter<boolean> = new EventEmitter();

    switchStatus: boolean = false;

    ngOnInit(): void {
        this.switchStatus = this.switchValue;
    }

    switchClick(): void {
        this.switchStatus = !this.switchStatus;
        this.eventSwitch.emit(this.switchStatus);
    }
}
