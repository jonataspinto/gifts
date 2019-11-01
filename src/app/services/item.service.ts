import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Item } from '../shared/models/item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private db: AngularFireDatabase) { }


  insertItem(item: Item, giftedKey) {
    this.db.database.ref('gifted').child(giftedKey).child('items').push(item)
  }

  deleteItem(giftedKey, itemKey){
    // console.log(giftedKey + " gifted")
    // console.log(itemKey + " item")
    this.db.list('gifted/'+giftedKey+'/items').remove(itemKey)
  }

}