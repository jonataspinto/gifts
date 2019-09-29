import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Gifted } from '../shared/models/gifted';

@Injectable({
  providedIn: 'root'
})
export class GiftedService {

  constructor(private db: AngularFireDatabase) { }

  insert(gifted: Gifted) {
    this.db.list('gifted').push(gifted)
  }
}
