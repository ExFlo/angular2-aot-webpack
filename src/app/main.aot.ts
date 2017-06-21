import { platformBrowser } from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';
import { MainModuleNgFactory } from './modules/main.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
