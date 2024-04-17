import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { MenuOptionComponent } from '../../molecules/menu-option/menu-option.component';
import { SwitchDarkComponent } from '../../molecules/switch-dark/switch-dark.component';
import { IActionMenuOption, IMenuOption } from '../../interfaces/IMenu.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'organisms-lateral-menu',
    standalone: true,
    imports: [
        CommonModule, TextComponent, MenuOptionComponent, SwitchDarkComponent, MatIconModule
    ],
    templateUrl: './lateral-menu.component.html',
    styleUrl: './lateral-menu.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LateralMenuComponent {
    @Input() switchDarkStatus: boolean = false;
    @Input() options: IMenuOption[] = [
        {
            text: 'Opcion 1',
            icon: 'view_list',
            selected: true
        },
        {
            text: 'Opcion 2',
            icon: 'view_list'
        },
        {
            text: 'Opcion 3',
            icon: 'view_list'
        }
    ];
    @Input() actionMenuOption: IActionMenuOption = {
        text: 'Opcion 1',
        icon: 'view_list',
        action: true
    };

    @Output() switchSatusChage: EventEmitter<boolean> = new EventEmitter();

    hideSideBar = false;
    


    hideToggleSideBar() {
        this.hideSideBar = !this.hideSideBar;
    }

    createBoard() {
        debugger;
    }
}
