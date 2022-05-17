import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponentComponent } from './widget-component/widget-component.component';



@NgModule({
  declarations: [
    WidgetComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetComponentComponent
  ]
})
export class WidgetModuleModule { }
