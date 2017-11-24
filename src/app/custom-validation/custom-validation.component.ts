import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';

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
      normalValidation: ["", Validators.compose([
        Validators.required
      ])],
      customValidation:["", Validators.compose([
        Validators.required, this.customValidator
      ])]
    });
    this.norm = this.iseForm.controls['normalValidation'];
    this.cust = this.iseForm.controls['customValidation'];
   }

  customValidator(field: FormControl): {[s: string]:boolean}{
    if(!field.value.match(/^yolo/)){
      return {invalidField: true}
    }
  }

  ngOnInit() {
  }
  onSubmit():void{

  }

}
