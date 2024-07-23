/// <reference types="@angular/localize" />

import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/configs/app.config";
import { AppComponent } from "./app/main/app.component";

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
