import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as MenuActions from '../actions/menu.actions';
import { IStateMenu } from '../interfaces/IMenuStore.interface';


export const MENU_FEATURE_KEY = 'menu';

export interface BoardPartialState {
  readonly [MENU_FEATURE_KEY]: IStateMenu;
}

export const menuAdapter: EntityAdapter<IStateMenu> =
  createEntityAdapter<IStateMenu>();

export const initialMenuState: IStateMenu = menuAdapter.getInitialState({
    switchShowMenu: true,
    switchDarkMode: false,
    swithShowModal: {
      type: 'form',
      show: false
    },
    statusOptions: []
});

const reducer = createReducer(
    initialMenuState,
  on(MenuActions.setShowMenu, (state, {payload}) => ({
    ...state,
    switchShowMenu: payload
  })),
  on(MenuActions.setSwicthDarkMode, (state, {payload}) => ({
    ...state,
    switchDarkMode: payload
  })),
  on(MenuActions.setShowModal, (state, {payload}) => ({
    ...state,
    swithShowModal: payload
  })),
  on(MenuActions.setStatusOptions, (state, {payload}) => ({
    ...state,
    statusOptions: payload
  })),
);

export function menuReducer(state: IStateMenu | undefined, action: Action) {
  return reducer(state, action);
}