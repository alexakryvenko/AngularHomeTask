import { Injectable, InjectionToken } from "@angular/core";
import { AppConfig } from "./constants.service";

export const APP_CONFIG = new InjectionToken<AppConfig>("app.config");

