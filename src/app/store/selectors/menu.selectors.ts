import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoardState } from '../reducers/board.reducer';
import { IStateMenu } from '../interfaces/IMenuStore.interface';
import { MENU_FEATURE_KEY } from '../reducers/menu.reducer';

// Lookup the 'Board' feature state managed by NgRx
export const selectMenuState =
  createFeatureSelector<IStateMenu>(MENU_FEATURE_KEY);

export const selectMenuInformation = createSelector(
    selectMenuState,
  (state: IStateMenu) => state
);