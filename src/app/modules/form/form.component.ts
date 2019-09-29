import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  public profileForm: FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.person()
  }  

  person(){
    this.profileForm = this.fb.group({
      "firstName": [""]
    })
  }

  createList(){
    console.log(this.profileForm)
  }

}
