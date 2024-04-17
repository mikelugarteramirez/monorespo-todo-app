import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'molecules-menu-option',
    standalone: true,
    imports: [
        CommonModule, TextComponent, MatIconModule
    ],
    template: `
    @if(!action){
        <div class="container" [ngClass]="{selected}">
            <mat-icon class="icon" aria-hidden="false" [fontIcon]="iconName"></mat-icon>
            <atoms-text>{{textOption}}</atoms-text>
        </div>
    }@else {
        <div class="container functionality" (click)="clickFuncionality()">
            <mat-icon class="icon" aria-hidden="false" [fontIcon]="iconName"></mat-icon>
            <atoms-text>{{textOption}}</atoms-text>
        </div>
    }`,
    styleUrl: './menu-option.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuOptionComponent {
    @Input() textOption: string = '';
    @Input() iconName: string = '';
    @Input() selected: boolean | undefined = false;
    @Input() action: boolean = false;
    
    @Output() emitsClick: EventEmitter<void> = new EventEmitter();

    clickFuncionality() {
        this.emitsClick.emit();
    }
}
