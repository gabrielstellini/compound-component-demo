import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleOffComponent } from './toggle-off/toggle-off.component';
import { ToggleOnComponent } from './toggle-on/toggle-on.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ToggleDirective } from './toggle/toggle.directive';
import {SwitchComponent} from './switch/switch.component';
import {ToggleProviderDirective} from './toggle/toggle.provider.directive';

@NgModule({
  declarations: [
    ToggleOffComponent,
    ToggleOnComponent,
    ToggleButtonComponent,
    ToggleDirective,
    ToggleProviderDirective,
    SwitchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleOffComponent,
    ToggleOnComponent,
    ToggleButtonComponent,
    ToggleDirective,
    SwitchComponent,
    ToggleProviderDirective
  ],
  providers: [
    ToggleProviderDirective,
    ToggleDirective
  ]
})
export class ToggleModule { }
