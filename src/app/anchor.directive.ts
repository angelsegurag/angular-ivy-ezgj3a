import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[component-host]',
})
export class AnchorDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
