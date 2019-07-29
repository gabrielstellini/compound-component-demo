import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-toggle',
  templateUrl: './my-toggle.component.html',
  styleUrls: ['./my-toggle.component.sass']
})
export class MyToggleComponent {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
}

