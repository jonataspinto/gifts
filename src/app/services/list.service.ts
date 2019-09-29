import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';
import { Gifted } from '../shared/models/gifted';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public glist: Gifted = {
    name : "",
    key: "",
    items: [],
    imgSrc: ""
  } 

  public content = new Subject<Gifted>()
  
  constructor(private db: AngularFireDatabase) { }

  getlist(list){
    this.content.next(list)
  }

}
