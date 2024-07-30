import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

// import { provideCacheableAnimationLoader, provideLottieOptions } from 'ngx-lottie';
// import player from 'lottie-web';

import { routes } from "../routes/app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import {
  provideCacheableAnimationLoader,
  provideLottieOptions,
} from "ngx-lottie";
import player from "lottie-web";
import { provideHttpClient, withFetch } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      
      withFetch()
    ),
    provideCacheableAnimationLoader(),
    provideHttpClient(
      withFetch()
   ),
    provideLottieOptions({ player: () => player }),
  ],
};
