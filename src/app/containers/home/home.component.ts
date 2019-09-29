import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { ItemService } from 'src/app/services/item.service';
import { Gifted } from 'src/app/shared/models/gifted';
import { GiftedService } from 'src/app/services/gifted.service';
import { ListService } from 'src/app/services/list.service';
import { ListComponent } from '../list/list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private itemService: ItemService, private giftedService: GiftedService, private listService: ListService, private router: Router, private listComponent: ListComponent) { }

  dados = []
  ngOnInit() {

    // let item : Item
    // item = new Item()
    // item.name = 'tabua'
    // item.imgSrc ="https://cdn.awsli.com.br/600x450/167/167491/produto/13403531/c7c21ecd5a.jpg"
    // console.log(item)
    // this.itemService.insert(item)
    // console.log(item)
    
    // let giftedJON : Gifted = new Gifted
    // giftedJON.name = 'Jonatas'
    // giftedJON.imgSrc = 'https://scontent.fsdu11-1.fna.fbcdn.net/v/t1.0-9/20728316_1406360876138869_8784483511401506098_n.jpg?_nc_cat=102&_nc_oc=AQmxUfjJiRHHPgi0cnugo9xTaEqQHjGCYj9sfH5pSMuTX4IY37c8SzHb-jZbz6VbLeU&_nc_ht=scontent.fsdu11-1.fna&oh=6a497a6799502a83bbb99a598daa9600&oe=5DF7C73F'
    
    // giftedJON.items.push(item)
    // this.giftedService.insert(giftedJON)
    // console.log(giftedJON)
    
    // let giftedMA : Gifted = new Gifted
    // giftedMA.name = 'Mariana'
    // giftedMA.imgSrc = 'https://scontent.fsdu11-1.fna.fbcdn.net/v/t1.0-9/13419147_1211514032226937_5468808183842186967_n.jpg?_nc_cat=101&_nc_oc=AQkQW792E9CSknNPrXl5taR2ogQn8pz6O6Bm0n62TVmt1nF6mSlNxBm7DQssfHQTz8o&_nc_ht=scontent.fsdu11-1.fna&oh=52ff9a8e4284f179a1015412f0868661&oe=5E37974B'
    
    // giftedJON.items.push(item)
    // this.giftedService.insert(giftedMA)
    // console.log(giftedMA)
    
    this.itemService.getAll().subscribe(dados=> {
      this.dados = dados    
      // console.log(dados)
      // console.log(dados[1])
    })
  }

public mItem: Gifted = {
  name: "",
  key: "",
  items: [],
  imgSrc: ""
}

  ten(item){
    this.mItem = item
    console.log(this.mItem)
    this.listService.content.next(this.mItem)
    this.router.navigate(['list/'])

  }
  
}
