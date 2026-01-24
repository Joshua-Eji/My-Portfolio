
// Fix: Use provideZonelessChangeDetection instead of experimental version
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection()
  ]
};