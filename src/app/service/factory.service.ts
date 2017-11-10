import { Injectable } from '@angular/core';

@Injectable()
export class FactoryService {

  storedArray: Array<string>;
  constructor() { }

  appendStringToArray(inputArray: Array<string>): void{
    this.storedArray = inputArray;
    var newString = "This is a Test String to Validate Ise-Jinju Factory Service";
    this.storedArray.push(newString);
  }
}
