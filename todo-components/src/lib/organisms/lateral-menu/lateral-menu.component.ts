import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { MenuOptionComponent } from '../../molecules/menu-option/menu-option.component';
import { SwitchDarkComponent } from '../../molecules/switch-dark/switch-dark.component';
import { IActionMenuOption, IMenuOption } from '../../interfaces/IMenu.interface';

@Component({
    selector: 'organisms-lateral-menu',
    standalone: true,
    imports: [
        CommonModule, TextComponent, MenuOptionComponent, SwitchDarkComponent
    ],
    templateUrl: './lateral-menu.component.html',
    styleUrl: './lateral-menu.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LateralMenuComponent {
    @Input() switchDarkStatus: boolean = false;
    @Input() options: IMenuOption[] = [];
    @Input() actionMenuOption?: IActionMenuOption;

    @Output() switchSatusChage: EventEmitter<boolean> = new EventEmitter();

    hideSideBar = false;

    hideToggleSideBar() {
        this.hideSideBar = !this.hideSideBar;
    }
}
