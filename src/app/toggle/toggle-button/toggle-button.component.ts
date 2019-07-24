import {Component} from '@angular/core';
import {ToggleProviderDirective} from '../toggle/toggle.provider.directive';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.sass']
})
export class ToggleButtonComponent  {
  constructor(public toggleProvider: ToggleProviderDirective) {}

  onClick() {
    this.toggleProvider.toggle.setOnState(!this.toggleProvider.toggle.on);
  }
}

