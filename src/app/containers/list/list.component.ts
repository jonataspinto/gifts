import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gifted } from 'src/app/shared/models/gifted';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/models/item';
import { GiftedService } from 'src/app/services/gifted.service';
import { ModalService } from 'src/app/modules/modal/modal.service';
import { LANG } from 'src/theme/pt';
import { isEmpty } from 'src/app/helpers/common';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Friend } from 'src/app/shared/models/friend';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public lang = LANG 
  public gifted: Gifted
  public isUser = false;

  public user: Friend

  form: FormGroup

  constructor(private router: Router, private giftedService: GiftedService, private itemSevice: ItemService, private modalService: ModalService, private userService: UserService, private formBuilder: FormBuilder) { }
  
  ngOnInit() {  
    
    this.giftedService.content.subscribe( res => this.gifted = res)
    // console.log(this.gifted.items)
    // console.log(this.gifted.key)
    this.user = this.userService.getUser()
    console.log(this.user)
    if(this.user.name=== ""){
      this.modalService.toggleModal()
    }
    this.createForm(new Friend());
    this.form.valueChanges.subscribe(value=>{
      console.log(value)
      this.user = value
    })
    this.userService.user.subscribe(res=>this.isUser=!isEmpty(res))
    this.userService.user.next(this.user = this.userService.getUser())
  }  

  deleteItem(itemKey){
    console.log(itemKey)
    this.gifted.items.splice(itemKey,1)
    this.itemSevice.deleteItem(this.gifted.key, itemKey)
  }

  toggleModal(){
    this.modalService.toggleModal()
  }

  save(){   
    console.log(this.user)
    this.userService.setUser(this.user)
  }

  createForm(friend: Friend){
    this.form= this.formBuilder.group({
      name:[""],
      dateBirth:[""]
    })
    console.log(this.form)
  }

  logout(){
    this.userService.logout()
  }

}
