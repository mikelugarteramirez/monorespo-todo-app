import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as BoardActions from './board.actions';
import { info } from 'src/utils/utils';

@Injectable()
export class BoardEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardActions.initBoard),
      switchMap(() => of(BoardActions.createBoard({ boards: info }))),
    )
  );
}
