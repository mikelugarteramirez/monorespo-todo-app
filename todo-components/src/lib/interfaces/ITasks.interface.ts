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
    title: string;
}

export interface IBoard {
    name: string;
    icon: string;
    columns: IListColumns[];
    active: boolean;
}