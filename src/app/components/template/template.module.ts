import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GsTemplateComponent } from './template.component';

@NgModule({
  imports: [RouterOutlet],
  declarations: [GsTemplateComponent],
  exports: [GsTemplateComponent],
})
export class ToyTemplateModule {}
