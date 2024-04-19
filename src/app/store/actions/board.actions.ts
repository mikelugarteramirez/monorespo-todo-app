import { createAction, props } from '@ngrx/store';
import { IBoard } from '@todoapp/todo-components/interfaces';

export const initBoard = createAction(
  '[Board Information] INIT',
  props<{ boards: IBoard[] }>()
);

export const createBoard = createAction(
  '[SET First Information] SET',
  props<{ boards: IBoard[] }>()
);

export const setBoardChangeStatusTask = createAction(
  '[SET Information Status Task] SET',
  props<{ boards: IBoard[] }>()
);