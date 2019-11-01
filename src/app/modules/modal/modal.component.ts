import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './modal.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { isEmpty } from 'src/app/helpers/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public open : boolean;
  public isUser = false;

  @Input() type: string;
  @Input() class: string;

  constructor(private modalService: ModalService, private userService: UserService,private router: Router) {}
  
  ngOnInit() {
    this.modalService.openModal.subscribe(status => this.open = status)
    // this.userService.user.subscribe(res=>this.isUser=!isEmpty(res))
    // this.userService.user.next(this.userService.getUser())
  }
  
  toggleModal(){
    console.log("clicou " + this.open)
    this.modalService.toggleModal()
  }

  // save(name, dateBirth){
  //   const user = {
  //     name: name,
  //     dateBirth: dateBirth
  //   }
  //   this.userService.setUser(user)
  // }
}
