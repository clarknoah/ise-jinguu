import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'io-one',
  templateUrl: './io-one.component.html',
  styleUrls: ['./io-one.component.css']
})
export class IoOneComponent implements OnInit {
  @Input() first_array: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
