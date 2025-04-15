import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/home_component/app.component';
import { config } from './app/home_component/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
