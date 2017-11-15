import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//services
import {FactoryService} from './service/factory.service';
import {SingletonService} from './service/singleton.service';
import {ISE_JINGU_TEST_VARIABLE} from './service/variables.service';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [
    AuthService,
//    {
//      provide: FactoryService,
//      useFactory: getFactoryService()
//    },
    SingletonService,
    {
      provide: ISE_JINGU_TEST_VARIABLE,
      useValue: ISE_JINGU_TEST_VARIABLE
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
