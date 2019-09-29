import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from 'src/app/shared/components/nav/nav.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { CardsModule } from 'src/app/shared/components/cards/cards.module';
import { ListModule } from '../list/list.module';
import { FormModule } from 'src/app/modules/form/form.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    ButtonModule,
    CardsModule,
    ListModule,
    FormModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ]
})
export class HomeModule { }
