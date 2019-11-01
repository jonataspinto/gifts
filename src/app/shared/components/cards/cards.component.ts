import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }
  
  @Input() name: string 
  @Input() imgSrc: string = ''
  @Input() key: string = ''
  @Input() router: string = ''
  @Input() width: string

getStyle(){
  return {
    'width': this.width
  }
}
  ngOnInit() {
  }

}
