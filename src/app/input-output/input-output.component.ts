import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  initial_array: Array<string>;
  constructor() {
    this.initial_array = ['Noah', 'Leah', 'Hannah'];
   }

  ngOnInit() {
  }

}
