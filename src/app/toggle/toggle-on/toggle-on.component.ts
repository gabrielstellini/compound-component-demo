import { Component, OnInit } from '@angular/core';
import {ToggleDirective} from '../toggle/toggle.directive';

@Component({
  selector: 'app-toggle-on',
  templateUrl: './toggle-on.component.html',
  styleUrls: ['./toggle-on.component.sass']
})
export class ToggleOnComponent {
  constructor(public toggle: ToggleDirective) { }
}
