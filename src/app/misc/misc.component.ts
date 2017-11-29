import { Component, OnInit,
  IterableDiffers, KeyValueDiffers, ElementRef,
   DoCheck, EventEmitter, AfterContentInit} from '@angular/core';
import { Observable} from 'rxjs';

@Component({
  selector: 'misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit,
AfterContentInit, DoCheck {
  text_field: Observable<string>;
  field_count: number;
  text_content: string;
  dif: any;
  difCheck: any;
  iterCheck: any;
  array_fun: string[];
  constructor(private el: ElementRef,
    diff: KeyValueDiffers,
    private iter: IterableDiffers) {
    console.log(el.nativeElement.baseURI);
    this.text_content = el.nativeElement.baseURI;
    this.field_count= 0;
    this.difCheck = diff.find([]).create(null);
    this.dif = {name:"Noah"};
    this.array_fun = ['hi'];
    this.iterCheck = iter.find([]).create(null);
   }

  ngOnInit() {
  }

  addToArray():void{
    this.array_fun.push('YOLO');
  }

  ngAfterContentInit():void{

  }

  ngDoCheck():void{
    console.log("Changes discovered");
    const changes = this.difCheck.diff(this.dif);
    const changesArr = this.iterCheck.diff(this.array_fun);
    if(changes){
      console.log(changes);
    }
    if(changesArr){
      console.log("changes to array");
    }
  }
  eventWatch(event): void{
    console.log(event);
    console.log(`That was an event!`);
  }


  runThing(event):void{
    console.log(event);
    if(/(?:abc)/.test(event)===true){
      console.log(`****HOT MAMA IT WORKED**`);
    }
  }
}
