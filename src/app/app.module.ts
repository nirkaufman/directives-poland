import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassDirective } from './directives/class.directive';
import { AutoResizeDirective } from './directives/auto-resize.directive';
import { LongClickDirective } from './directives/long-click.directive';
import {FormsModule} from "@angular/forms";
import { ModelDirective } from './directives/model.directive';
import { IfDirective } from './directives/if.directive';
import { MapDirective } from './directives/map.directive';
import { WindowDirective } from './directives/window.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    AutoResizeDirective,
    LongClickDirective,
    ModelDirective,
    IfDirective,
    MapDirective,
    WindowDirective
  ],
  imports: [BrowserModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
