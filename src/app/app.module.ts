import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// Components and Directives
import { AppComponent } from './app.component';
import { PopupDirective } from './popup.directive';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormTwoWayBindingComponent } from './form-two-way-binding/form-two-way-binding.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { ParamRoutingComponent } from './param-routing/param-routing.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { HttpComponent } from './http/http.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { MiscComponent } from './misc/misc.component';
import { IseJinguComponent} from './ise-jingu/ise-jingu.component';
//services
import {FactoryService} from './service/factory.service';
import {SingletonService} from './service/singleton.service';
import {ISE_JINGU_TEST_VARIABLE} from './service/variables.service';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './logged-in/logged-in.module';


export function loadFactory(){
  return new FactoryService();
}

import {
  routes as childRoutes,
  ParamRoutingModule
} from './param-routing/param-routing.module';
import { IoOneComponent } from './input-output/io-one/io-one.component';
import { IoTwoComponent } from './input-output/io-two/io-two.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: IseJinguComponent},
  {path: 'content_projection', component: ContentProjectionComponent},
  {path: 'directives', component: DirectivesComponent, canActivate: [LoggedInGuard]},
  {path: 'form-control', component: FormControlComponent},
  {path: 'form-builder', component: FormBuilderComponent},
  {path: 'form-two-way-binding', component: FormTwoWayBindingComponent},
  {path: 'custom_validation', component: CustomValidationComponent},
  {path: 'dependency_injection', component: DependencyInjectionComponent},
  {path: 'param_routing', component: ParamRoutingComponent, children: childRoutes},
  {path: 'input_output', component: InputOutputComponent},
  {path: 'http', component: HttpComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'misc', component: MiscComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PopupDirective,
    ContentProjectionComponent,
    DirectivesComponent,
    FormControlComponent,
    FormBuilderComponent,
    FormTwoWayBindingComponent,
    CustomValidationComponent,
    DependencyInjectionComponent,
    ParamRoutingComponent,
    InputOutputComponent,
    HttpComponent,
    LifecycleComponent,
    MiscComponent,
    IseJinguComponent,
    IoOneComponent,
    IoTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes),
    ParamRoutingModule
  ],
  providers: [
    LoggedInGuard,
    AuthService,
    {
      provide: FactoryService,
      useFactory: loadFactory
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
