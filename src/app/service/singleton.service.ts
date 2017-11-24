import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService {

  storedArray: Array<string>;
  constructor() {
    this.storedArray = [];
  }

  appendStringToArray(inputString: string): void{
    this.storedArray.push(inputString);
  }

}
