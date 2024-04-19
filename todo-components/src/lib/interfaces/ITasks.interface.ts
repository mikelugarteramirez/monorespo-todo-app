export interface ITask {
    title: string;
    description: string;
    subTasks: ISubTask[];
    status: string;
}

export interface ISubTask {
    title: string;
    status: 'done' | 'doing';
}

export interface IListColumns {
    todos: ITask[];
    listsIds: string[];
    idList: string;
    status: string;
}

export interface IBoard {
    name: string;
    icon: string;
    columns: IListColumns[];
    active: boolean;
}

export interface IDragDropInformation {
    id: string;
    data: ITask[];
}

export interface IDragDropInfoContainers {
    dragContainer: IDragDropInformation;
    dropContainer: IDragDropInformation;
}

export interface IModalInformation {
    status: string;
    data: ITask;
}

export interface INewBoard {
    data: {
        name: string;
    };
    status: string;
}