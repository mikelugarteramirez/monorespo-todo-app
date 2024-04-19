import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action, ActionReducer, MetaReducer } from '@ngrx/store';

import * as BoardActions from './board.actions';
import { IBoard } from '@todoapp/todo-components/interfaces';


export const BOARD_FEATURE_KEY = 'board';

export interface BoardState {
  boards: IBoard[]
}

export interface BoardPartialState {
  readonly [BOARD_FEATURE_KEY]: BoardState;
}

export const boardAdapter: EntityAdapter<BoardState> =
  createEntityAdapter<BoardState>();

export const initialBoardState: BoardState = boardAdapter.getInitialState({
  boards: []
});

const reducer = createReducer(
  initialBoardState,
  on(BoardActions.initBoard, (state) => ({
    ...state,
  })),
  on(BoardActions.createBoard, (state, {boards}) => ({
    ...state,
    boards: boards
  })),
  on(BoardActions.setBoardChangeStatusTask, (state, {boards}) => ({
    ...state,
    boards: boards
  }))
);

export function boardReducer(state: BoardState | undefined, action: Action) {
  return reducer(state, action);
}