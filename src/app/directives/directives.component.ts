import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  ngIf_boolean: boolean;
  ngFor_array: Array<any>;
  ngSwitch_var: string;
  ngStyle_font: number;
  colorVar: string;
  color: string;
  ngStyle_obj: any;

  constructor() {
    this.ngIf_boolean = false;
    this.color = "red";
    this.ngFor_array = [
      "Noah",
      "Leah",
      "AJ"
    ];
    this.ngSwitch_var = "";
    this.ngStyle_font=12;
    this.ngStyle_obj = {
      color: this.color
    };

  }

  setSize(operator): void {
    if(operator==="+"){
      this.ngStyle_font = this.ngStyle_font + 1;
    }
    else if(operator==="-"){
        this.ngStyle_font = this.ngStyle_font - 1;
    }
    console.log(this.ngStyle_font)
  }

  setColor(colorParam){
    this.ngStyle_obj.color = colorParam;
  }
  ngOnInit() {
  }

}
