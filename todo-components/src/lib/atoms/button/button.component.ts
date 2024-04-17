import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IStyleButton } from '../../interfaces/IStyles.interface';

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
export class ButtonComponent implements OnInit {
    @Input() fontSize: string = '16px';
    @Input() fullWidth: boolean = false;
    @Input() borderRounded: boolean = false;
    @Input() darkTheme: boolean = false;
    @Input() typeButton: 'primary' | 'accent' | 'warn' = 'primary';

    styles!: IStyleButton;

    ngOnInit(): void {
        this.styles = {
            ['font-size']: this.fontSize,
            width: this.fullWidth ? '100%' : 'auto',
            ['border-radius']: this.borderRounded ? '10px' : 'none',
            ['background-color']: this.darkTheme ? '#000' : '#fff',
            color: this.darkTheme ? '#fff' : '#000'
        }
    }

}
