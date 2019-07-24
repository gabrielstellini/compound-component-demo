import {Directive, EventEmitter, Host, Input, OnChanges, Optional, Output, SimpleChanges} from '@angular/core';
import {ToggleDirective} from './toggle.directive';

@Directive({
  exportAs: 'appToggleProvider',
  selector: 'app-toggle, [appToggle], [appToggleProvider]',
})
export class ToggleProviderDirective implements OnChanges {
  @Input() toggleProvider: ToggleDirective;

  toggle: ToggleDirective = this.toggleDirective;

  constructor(
    @Host() @Optional() private toggleDirective: ToggleDirective
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const {toggleProvider} = changes;
    if (toggleProvider) {
      this.toggle = this.toggleProvider || this.toggleDirective;
    }
  }

}
