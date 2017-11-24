import { Injectable } from '@angular/core';

@Injectable()
export class FactoryService {

  storedArray: Array<string>;
  constructor() {
      this.storedArray = [];
    }

  appendStringToArray(inputString: string): void{
    this.storedArray.push(inputString);
  }
}
