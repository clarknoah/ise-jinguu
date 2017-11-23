import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } '@angular/forms';

@Component({
  selector: 'custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent implements OnInit {

  iseForm: FormGroup;
  norm: AbstractControl;
  cust: AbstractControl;
  constructor(fb: FormBuilder) {
    this.iseForm = fb.group({
      normalValidation: ["", Validators.required],
      customValidation:""
    });
    this.norm = this.iseForm.controls['normalValidation'];
    this.cust = this.iseForm.controls['customValidation'];
   }

  ngOnInit() {
  }
  onSubmit():void{

  }

}
