import {Component, Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Directive({
  exportAs: 'appToggle',
  selector: 'app-toggle, [appToggle]',
})
export class ToggleDirective {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  setOnState(on: boolean) {
    this.on = on;
    this.toggle.emit(this.on);
  }

}
