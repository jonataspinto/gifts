import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/helpers/baseControlValueAccessor';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends BaseControlValueAccessor<string> {
  @Input() type: string = "text";
  @Input() id: string 
  @Input() placeholder: string = "";
  @Input() labelText: string = "";
  @Input() color: string = "black";
  @Input() bgColor: string = "";
  @Input() width: string;
  @Input() height: string;
  @Input() label: boolean = false;
  @Input() iconLabel: string;
  @Input() bord: string = "";
  @Input() borderbottom: string = "";
  @Input() borderradius: string = "";


  getStyle() {
    return {
      // ...this.style,
      'background-color': this.bgColor,
      'color': this.color,
      'width': this.width,
      'height': this.height,
      'border': this.bord,
      'border-bottom': this.borderbottom,
      'border-radius': this.borderradius,
    };
  }

  handleChange(event){
    this.onChange(event.target.value)
  }


  ngOnInit() {
  }

}
