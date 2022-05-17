import { AfterViewInit, Component, Injector, OnInit, ViewChild } from '@angular/core';
import { WidgetComponentComponent } from './widget-module/widget-component/widget-component.component';

@Component({
  selector: 'dynamic-component',
  template: 'hello dynamic template'
})
export class DynamicComponentComponent implements OnInit, AfterViewInit {

  fromComponent = "text from component variable";

  @ViewChild("theComponent", { static: false }) theComponent: WidgetComponentComponent | undefined;

  constructor(injector: Injector) { }

    ngAfterViewInit(): void {
      console.log(this.theComponent);
    }

  ngOnInit(): void {
    
  }

}
