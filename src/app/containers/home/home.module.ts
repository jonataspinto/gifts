import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from 'src/app/shared/components/nav/nav.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { CardsModule } from 'src/app/shared/components/cards/cards.module';
import { ListModule } from '../list/list.module';
import { FormModule } from 'src/app/modules/form/form.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    CardsModule,
    ListModule,
    FormModule,
    ModalModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ]
})
export class HomeModule { }
