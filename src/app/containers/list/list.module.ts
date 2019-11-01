import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { NavModule } from 'src/app/shared/components/nav/nav.module';
import { CardsModule } from 'src/app/shared/components/cards/cards.module';
import { FormModule } from 'src/app/modules/form/form.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    CardsModule,
    FormModule,
    ModalModule,
    ReactiveFormsModule
  ],
  providers:[ListComponent]
})
export class ListModule { }
