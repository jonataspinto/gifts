import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Gifted } from '../shared/models/gifted';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftedService {

  public content = new BehaviorSubject<Gifted>(new Gifted())
  
  constructor(private db: AngularFireDatabase) { }

  insert(gifted: Gifted) {
    this.db.list('gifted').push(gifted)
  }

  delete(giftedkey){
    this.db.list('gifted').remove(giftedkey)
  }

  nextGifted(gifted){
    this.content.next(gifted)
  }

  getAll(){
    return this.db.list('gifted')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
      })
    );
  }
}
