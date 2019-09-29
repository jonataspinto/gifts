import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Router } from '@angular/router';
import { Gifted } from 'src/app/shared/models/gifted';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public contentList: Gifted

  constructor(private router: Router, private listService: ListService) { }
  
  ngOnInit() {
    this.listService.content.subscribe(res => {this.contentList = Object.assign( res)
    console.log(res)
    console.log(this.contentList)
  })
  console.log(this.contentList)
  }  

}
