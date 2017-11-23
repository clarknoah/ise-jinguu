import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { IseForm } from './ise-form.model';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})

export class FormBuilderComponent implements OnInit {

  iseForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.iseForm = fb.group({
      email:[''],
      age:[],
      true_false:[],
      birth:[]
  });
  }

  onSubmit(){
    console.log("Form Summitted");
    console.log(this.iseForm);
  }

  ngOnInit() {
  }

}
