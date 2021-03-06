import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormModule
  ],
  exports:[ModalComponent]
})
export class ModalModule { }
