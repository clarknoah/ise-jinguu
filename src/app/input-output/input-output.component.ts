import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  initial_array: Array<string>;
  io_one_array: any;
  io_two_array: Array<string>;
  constructor() {
    this.initial_array = ['Noah', 'Leah', 'Hannah'];
   }

  ngOnInit() {
  }

  editted_array(newValue: string):void {
    this.io_one_array = newValue;
  }

  editted_two(newValue: any):void{
    this.io_two_array = newValue;
  }
}
