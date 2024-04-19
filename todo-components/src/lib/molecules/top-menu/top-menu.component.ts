import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
    selector: 'molecules-top-menu',
    standalone: true,
    imports: [
        CommonModule,
        TextComponent,
        ButtonComponent
    ],
    templateUrl: './top-menu.component.html',
    styleUrl: './top-menu.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenuComponent {
    @Input() title: string | undefined = '';
    @Input() buttonText: string | undefined = '';
}
