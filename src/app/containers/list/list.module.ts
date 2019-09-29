import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { NavModule } from 'src/app/shared/components/nav/nav.module';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    NavModule
  ],
  providers:[ListComponent]
})
export class ListModule { }
