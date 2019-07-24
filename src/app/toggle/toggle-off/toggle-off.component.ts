import { Component, OnInit } from '@angular/core';
import {ToggleDirective} from '../toggle/toggle.directive';

@Component({
  selector: 'app-toggle-off',
  templateUrl: './toggle-off.component.html',
  styleUrls: ['./toggle-off.component.sass']
})
export class ToggleOffComponent {

  constructor(public toggle: ToggleDirective) { }

}
