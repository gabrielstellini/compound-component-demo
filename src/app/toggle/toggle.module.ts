import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwitchComponent} from './switch/switch.component';
import {ToggleComponent} from './toggle/toggle.component';
import { MyToggleComponent } from './my-toggle/my-toggle.component';
import {TogglerDirective} from './toggle/toggler.directive';

@NgModule({
  declarations: [
    SwitchComponent,
    ToggleComponent,
    SwitchComponent,
    MyToggleComponent,
    TogglerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleComponent,
    SwitchComponent,
    MyToggleComponent,
    TogglerDirective
  ],
  providers: [
  ]
})
export class ToggleModule { }
