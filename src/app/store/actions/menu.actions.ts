import { createAction, props } from '@ngrx/store';
import { IShowModal, IStateMenu } from '../interfaces/IMenuStore.interface';

export const setShowMenu = createAction(
  '[SET SHOW SLIDE MENU] SET',
  props<{ payload: boolean }>()
);

export const setSwicthDarkMode = createAction(
    '[SET DARKMODE] SET',
    props<{ payload: boolean }>()
);

export const setShowModal = createAction(
    '[SET SHOW Modal] SET',
    props<{ payload: IShowModal }>()
);

export const setStatusOptions = createAction(
  '[SET STATUS OPTIONS VALUES] SET',
  props<{ payload: string[] }>()
);