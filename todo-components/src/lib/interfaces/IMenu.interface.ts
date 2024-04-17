export interface IMenuOption {
    text: string;
    icon: string;
    selected?: boolean;
}

export interface IActionMenuOption extends IMenuOption {
    action: boolean;
}