import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit{
  destroyComponent: boolean;
  zeroVal: number;
  constructor() {
    this.zeroVal = 0;
    this.destroyComponent = false;
  }

  ngOnInit() {
  }

  incrementVal():void{
    this.zeroVal ++;
  }


}
