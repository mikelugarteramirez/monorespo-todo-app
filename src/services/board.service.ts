import { Injectable } from '@angular/core';
import { IBoard } from '@todoapp/todo-components/interfaces';
import { BehaviorSubject } from 'rxjs';
import { info } from './../utils';

@Injectable({providedIn: 'root'})
export class BoardService {
    board: BehaviorSubject<IBoard[]> = new BehaviorSubject<IBoard[]>(info);
}