import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOARD_FEATURE_KEY, BoardState, boardAdapter } from '../reducers/board.reducer';

// Lookup the 'Board' feature state managed by NgRx
export const selectBoardState =
  createFeatureSelector<BoardState>(BOARD_FEATURE_KEY);

export const selectAllBoard = createSelector(
  selectBoardState,
  (state: BoardState) => state
);

export const selectMenuBoards = createSelector(
  selectBoardState,
  (state: BoardState) => state
);

export const selectSelectedBoard = createSelector(
  selectBoardState,
  (state: BoardState) => state.boards.find((item) => {
    return item.active;
  })
);