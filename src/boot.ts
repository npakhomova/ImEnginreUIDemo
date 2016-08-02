import './common/styles/common.css';

import { Title } from '@angular/platform-browser';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { enableProdMode } from '@angular/core';

import { routesConfig } from './routes';
import { AppComponent } from './components/app/app.component';

if (process.env.ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    Title
    // provideRouter(routesConfig)
]);