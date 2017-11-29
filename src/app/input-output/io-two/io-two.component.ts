import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'io-two',
  templateUrl: './io-two.component.html',
  styleUrls: ['./io-two.component.css']
})
export class IoTwoComponent implements OnInit {
  @Input() first_array: string;
  @Output() editted_array2 = new EventEmitter<String>();
  stringVal: Array<string>;

  constructor() { }

  ngOnInit() {
    this.stringVal = this.first_array.split(',');
    delete this.stringVal[0];
    this.editted_array2.emit(this.stringVal.toString());
  }

}
