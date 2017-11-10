import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//services
import {FactoryService} from './service/factory.service';
import {SingletonService} from './service/singleton.service';
import {ISE_JINGU_TEST_VARIABLE} from './service/variable.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [
    {
      provide: FactoryService,
      useFactory: () => {return new FactoryService()}
    },
    SingletonService,
    {
      provide: ISE_JINGU_TEST_VARIABLE,
      useValue: ISE_JINGU_TEST_VARIABLE
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
