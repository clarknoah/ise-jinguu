import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'io-one',
  templateUrl: './io-one.component.html',
  styleUrls: ['./io-one.component.css']
})
export class IoOneComponent implements OnInit {
  @Input() first_array: Array<string>;
  @Output() editted_array = new EventEmitter<String>();
  stringVal = new Array();
  constructor() {
  }

  ngOnInit() {
    this.stringVal = this.stringVal.concat(this.first_array);
    this.stringVal.push("Jeffery");
    this.editted_array.emit(this.stringVal.toString());
  }åß



}
