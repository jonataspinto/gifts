import { Injectable } from '@angular/core';
import { Friend } from '../shared/models/friend';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user = new Subject<Friend>()

  constructor() {
    this.updateUser();
    }

  logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("dateBirth");
    this.updateUser()
  }

  updateUser(){
    const user = {
      name: localStorage.getItem("name") || "",
      dateBirth: localStorage.getItem("dateBirth") || ""
    }
    this.user.next(user)
  }

  getUser(){
    const user = {
      name: localStorage.getItem("name") || "",
      dateBirth: localStorage.getItem("dateBirth") || ""
    }
    return user
  }

  setUser({name, dateBirth}){
    localStorage.setItem("name", name)
    localStorage.setItem("dateBirth", dateBirth)
    this.user.next(this.getUser())
  }
}
