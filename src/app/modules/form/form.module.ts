import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent, InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[FormComponent]
})
export class FormModule { }
