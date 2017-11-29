import { Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input} from '@angular/core';

@Component({
  selector: 'main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {
  @Input() numberValue: number;
  constructor() {

  }

  ngOnInit() {
    console.log(`ngOnInit function has been run!`);
  }

  ngOnDestroy(): void{
    console.log(`ngOnDestroy has been run!0`);
  }

  incrementNumber():void{
    this.numberValue = this.numberValue + 1;
  }

  ngOnChanges(changes:{[propName: string]:SimpleChange}):void{
    console.log(`ngOnChanges was called`);
    console.log(changes);
  }

  ngAfterContentChecked():void{
    console.log(`ngAfterContentChecked has been called!`);
  }

  ngAfterContentInit():void{
    console.log(`ngAfterContentInit has been called!`);
  }

  ngAfterViewChecked():void{
    console.log(`ngAfterViewChecked has been called!`);
  }

  ngAfterViewInit(): void{
    console.log(`ngAfterViewInit has been called!`);
  }

  ngDoCheck(): void{
    console.log(`ngDoCheck has been called!`);
  }
}
