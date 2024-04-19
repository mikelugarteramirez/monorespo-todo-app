import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromBoard from './store/reducers/board.reducer';
import * as fromMenu from './store/reducers/menu.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    [
      provideState(fromBoard.BOARD_FEATURE_KEY, fromBoard.boardReducer),
      provideState(fromMenu.MENU_FEATURE_KEY, fromMenu.menuReducer)
    ],
    provideStore(),
    provideClientHydration(),
    provideRouter(appRoutes)
  ],
};
