import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromBoard from './+state/board.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideState(fromBoard.BOARD_FEATURE_KEY, fromBoard.boardReducer),
    provideStore(),
    provideClientHydration(),
    provideRouter(appRoutes)
  ],
};
