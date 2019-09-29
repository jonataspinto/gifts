import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Item } from '../shared/models/item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private db: AngularFireDatabase) { }


  insert(item: Item) {
    this.db.list('jonatas.items').push(item)
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

