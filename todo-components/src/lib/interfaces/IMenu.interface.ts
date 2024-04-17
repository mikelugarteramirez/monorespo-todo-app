export interface IMenuOption {
    text: string;
    icon: string;
}

export interface IActionMenuOption extends IMenuOption {
    action: Function;
}