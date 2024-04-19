import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { MenuOptionComponent } from '../../molecules/menu-option/menu-option.component';
import { SwitchDarkComponent } from '../../molecules/switch-dark/switch-dark.component';
import { IActionMenuOption, IMenuOption } from '../../interfaces/IMenu.interface';
import { MatIconModule } from '@angular/material/icon';
import { IBoard } from '../../interfaces/ITasks.interface';

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
export class LateralMenuComponent implements OnInit {
    @Input() switchDarkStatus: boolean = false;
    @Input() boards!: IBoard[];
    @Input() options: IMenuOption[] = [];
    @Input() actionMenuOption: IActionMenuOption = {
        text: '+ Create Board',
        icon: 'view_list',
        action: true
    };

    @Output() switchSatusChage: EventEmitter<boolean> = new EventEmitter();
    @Output() clickOptionChange: EventEmitter<string> = new EventEmitter();
    @Output() clickAddBoard: EventEmitter<string> = new EventEmitter();

    hideSideBar = false;
    

    ngOnInit(): void {
        this.renderOptions();
    }

    ngOnChanges(changes: any) {
        if(changes.boards) {
            this.renderOptions();
        }
    }

    renderOptions() {
        this.options = this.boards.map((board) => {
            return {
                text: board.name,
                icon: board.icon,
                selected: board.active
            }
        })
    }
    hideToggleSideBar() {
        this.hideSideBar = !this.hideSideBar;
    }

    clickOption(option: IMenuOption) {
        this.clickOptionChange.emit(option.text);
    }

    createBoard() {
        this.clickAddBoard.emit();
    }
}
