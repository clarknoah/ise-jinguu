import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  form_email: string;
  constructor() { }

  ngOnInit() {
  }

  btnClick(form: any):void{
    console.log(form);
    console.log(`Button was clicked!`);
  }

}
