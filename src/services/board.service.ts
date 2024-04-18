import { Injectable, inject } from '@angular/core';
import { IBoard } from '@todoapp/todo-components/interfaces';
import { BehaviorSubject } from 'rxjs';
import { info } from '../utils/utils';

@Injectable({providedIn: 'root'})
export class BoardService {

    private board: BehaviorSubject<IBoard[]> = new BehaviorSubject<IBoard[]>(info);

    public get boardInfo() {
        return this.board;
    }

    public setBoard(information: IBoard[]) {
        this.board.next(information)
    }

    setLocaleStorage(key: string, item: any) {
        // localStorage.setItem(key, JSON.stringify(item));
    }

    getLocaleStorage<T>(key: string) {
        // const localInfo = this.localStorage.getItem(key);
        // return localInfo ? JSON.parse(localInfo) : localInfo;
    }
}