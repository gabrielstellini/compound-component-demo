import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OtherComponentComponent} from './other-component/other-component.component';
import {ToggleModule} from './toggle/toggle.module';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
