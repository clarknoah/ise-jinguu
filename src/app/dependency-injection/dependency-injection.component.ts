import { Component, OnInit } from '@angular/core';
import {FactoryService} from '../service/factory.service';
import {SingletonService} from '../service/singleton.service';
import {ISE_JINGU_TEST_VARIABLE} from '../service/variables.service';
@Component({
  selector: 'dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {
  singleton_array_one: Array<string>;
  singleton_array_two: Array<string>;
  factory_array_one: Array<string>;
  factory_array_two: Array<string>;
  test_var: string;
  constructor(private singleOne: SingletonService,
    private singleTwo: SingletonService,
    private factoryOne: FactoryService,
    private factoryTwo: FactoryService) {
    this.test_var = ISE_JINGU_TEST_VARIABLE;
    this.singleOne.appendStringToArray("Testing Singleton One");
    this.singleTwo.appendStringToArray("Testing Singleton Two");
    this.singleton_array_one = singleOne.storedArray;
    this.singleton_array_two = singleTwo.storedArray;
    this.factoryOne.appendStringToArray("Testing Factory One");
    this.factory_array_one = factoryOne.storedArray;
    this.factoryTwo.appendStringToArray("Testing Factory Two");
    this.factory_array_two = factoryTwo.storedArray;

  }


  ngOnInit() {
  }

}
