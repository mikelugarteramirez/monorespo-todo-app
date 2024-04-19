export interface IStateMenu {
    switchShowMenu: boolean;
    switchDarkMode: boolean;
    swithShowModal: IShowModal;
    statusOptions: string[];
}

export interface IShowModal {
    show: boolean;
    type: 'form' | 'detail' | 'form-board';
}