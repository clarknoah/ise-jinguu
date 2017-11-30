# IseJingu

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Current Checklist (CAO 27Nov17)

1. generate App
> `ng new ise-jingu`
1. Import bootstrap reflect-metadata font-awesome
> `npm install --save zone reflect-metadata font-awesome bootstrap@4.0.0-beta.2 jquery@1.9.1 popper.js@^1.12.3`
2. Remove `app` prefix from `angular-cli.json`
2. generate Factory Service
> `ng generate service service/factory`
3. Program service and create function that accepts an array, appends it, and stores it.
3. Inject factory into `app.module`
3. generate Singleton Service
> `ng generate service service/singleton`
4. Program service and create a funciton that accepts an array and appends it, and stores it.
5. import and Inject singleton into `app.module`
5. Create export function for `useFactory` key
```javascript
export function loadFactory(){
    return new FactoryService();
}
import = {
    provide: FactoryService,
    useFactory: loadFactory
};
```
6. generate variableService that contains a single string value
7. import and Inject variableService into `app.module`
8. generate AuthService
> `ng generate service service/auth`
9. Add constructor to auth service to remove localStorage user (if there)
9. Add function for login, logout, getUser, and isLoggedIn(boolean)
9. import and Inject AuthService into `app.module`
9. generate LoginComponent
> `ng generate component login`
10. generate PopUp Directive
> `ng generate directive popup`
10. generate Content-Projection Component
> `ng generate component content-projection`
10. generate DirectivesComponent
> `ng generate component directives`
11. generate FormControlComponent
> `ng generate component form-control`
12. generate FormBuilderComponent
> `ng generate component form-builder`
14. generate CustomValidationComponent
> `ng generate component custom-validation`
15. generate DependencyInjectionComponent
> `ng generate component dependency-injection`
16. generate ParamRoutingComponent
> `ng generate component param-routing`
17. generate InputOutputComponent
> `ng generate component input-output`
17. generate HttpComponent
> `ng generate component http`
17. generate LifecycleComponent
> `ng generate component lifecycle`
18. generate MiscComponent
> `ng generate component misc`
18. generate ise-jingu (home) Component
> `ng generate component ise-jingu`
19. Create routing Guard
> `ng generate module logged-in`
19. Import files and create canActive function in `logged-in.module.ts`
```javascript
/* tslint:disble max-line-length */
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../service/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const isLoggedIn = this.authService.isLoggedIn();
      console.log('canActivate', isLoggedIn);
      return isLoggedIn;
  }
}
```
19. Import `logged-in` module into `app.module.ts`
```javascript
import { LoggedInGuard } from './logged-in/logged-in.module';
```
19. Add Guard to one of the routes in `app.module.ts`
19. Inject `LoggedInGuard` into `app.module` `providers`
19. Import RouterModule,Routes
```javascript
import {
  RouterModule,
  Routes
} from '@angular/router';
```
20. Create routes: Routes in app.module
```javascript
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: IseJinguComponent},
  {path: 'content_projection', component: ContentProjectionComponent},
  {path: 'directives', component: DirectivesComponent, canActivate: {LoggedInGuard}},
  {path: 'form-control', component: FormControlComponent},
  {path: 'form-builder', component: FormBuilderComponent},
  {path: 'custom_validation', component: CustomValidationComponent},
  {path: 'dependency_injection', component: DependencyInjectionComponent},
  {path: 'param_routing', component: ParamRoutingComponent},
  {path: 'input_output', component: InputOutputComponent},
  {path: 'http', component: HttpComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'misc', component: MiscComponent},
];
```
21. Inject `RouterModule.forRoot(routes)` into imports
22. Import Router into `app.component.ts`
```javascript
import {
  Router
} from '@angular/router';
//.......
constructor(private router: Router) {
};
```
23. Inject router into the constructor of `app.component.ts`
```javascript
constructor(private router: Router) {
};
```
24. Inject AuthService into LoginComponent
24. Create `login()` and `logout()` functions for LoginComponent
24. Create Navbar in `app.component.html which includes routerLink to home`
24. Add `routerLink` into `app.component.html`
```html
<li class="list-group-item"><a [routerLink]="['/directives']">Directives</a></li>
<li class="list-group-item"><a [routerLink]="['/form-control']">Form Control</a></li>
<li class="list-group-item"><a [routerLink]="['/form-builder']">Form Builder</a></li>
<li class="list-group-item"><a [routerLink]="['/custom_validation']">Custom Validation</a></li>
<li class="list-group-item"><a [routerLink]="['/dependency_injection']">Dependency Injection</a></li>
<li class="list-group-item"><a [routerLink]="['/param_routing']">Param Routing</a></li>
<li class="list-group-item"><a [routerLink]="['/input_output']">Input-Output</a></li>
<li class="list-group-item"><a [routerLink]="['/http']">HTTP</a></li>
<li class="list-group-item"><a [routerLink]="['/lifecycle']">Lifecycle</a></li>
<li class="list-group-item"><a [routerLink]="['/content_projection']">Content-Projection</a></li>
<li class="list-group-item"><a [routerLink]="['/misc']">Misc</a></li>
```
25. Add Router-Outlet to `app.component.html`
33. `DirectivesComponent:`
26. Utilize `*ngIf` in DirectivesComponent
27. Utilize `*ngFor` in DirectivesComponent
28. Utilize `*ngSwitch` in DirectivesComponent
29. Utilize `ngStyle` in DirectivesComponent
30. Utilize `[style]` in DirectivesComponent
31. Utilize `ngClass` in DirectivesComponent
32. Utilize `ngNonBindable` in DirectivesComponent
33. `FormControlComponent:`
32. Import `FormsModule` into FormControlComponent
33. Create single field ngForm in FormControlComponent
33. `FormBuilderComponent:`
35. Import `ReactiveFormsModule` into `app.module`, place into `imports` `@AppModule`
36. Import `FormGroup, FormBuilder` into `FormBuilderComponent`
37. Create form using FormBuilder that contains 4 different data types in `FormBuilderComponent`
37. `CustomValidationComponent:`
38. Import modules to do validation with `CustomValidationComponent`
```javascript
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
```
39. Run form validation, field validation, and custom validation of field on `CustomValidationComponent`
40. `DependencyInjectionComponent:`
41. Inject the three services and display values contained within them
42. `ParamRoutingComponent`
43. Import ActivatedRoute and Router to `ParamRoutingComponent`
```javascript
import { ActivatedRoute, Router} from '@angular/router';
```
44. Generate two sub components for routing purposes
> `ng generate component param-routing/main-page`
> `ng generate component param-routing/param-view`
44. Create app module for Param Routing
45. Import Angular Modules to `param-routing.module.ts`
```javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';


import { MainPageComponent } from './main-page/main-page.component';
import { ParamViewComponent } from './param-view/param-view.component';


@NgModule({
  declarations: [
    ParamRoutingComponent,
    MainPageComponent,
    ParamViewComponent
  ],
  exports: [
    ParamRoutingComponent,
  MainPageComponent,
    ParamViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ParamRoutingModule { }
```
46. Create the routes for the param-routing module
```javascript
export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: ':id', component: ParamViewComponent },
];
```
47. Import `param-routing.module to app.module` and the routes
```javascript
import {
  routes as childRoutes,
  ParamRoutingModule
} from './param-routing/param-routing.module';
```
48. Import Router and ActivatedRoute Class into `param-routing.component.ts`
49. Create `routerLink` links in `param-routing.component.html`
49. Create dom that accepts a string input and runs a `goToPath` function to route with that param
50. Add the ActivatedRoute to the `ParamViewComponent`, and subscribe to the ID parameter and display it in dom
51. `InputOutputComponent`
52. Create two sub components io-one and io-two
> `ng generate component input-output/io-one`
> `ng generate component input-output/io-two`
53. Create two event listener functions in the parent component to map to children io and visualize changes to the variable in parent
54.` HttpComponent `
55. Import HTTP Modules into `http.component`
```javascript
import { HttpModule, Http, Response, RequestOptions, Headers} from '@angular/http';
```
56. Add http get request and display the value of it
```javascript
constructor(private http: Http) {
  this.http.request('http://jsonplaceholder.typicode.com/posts/1')
  .subscribe((res:Response)=>{
    this.display_value = res.json().title;
  })
 }
 ```
 57. `Lifecycle`
 58. Create a sub lifecycle component
 > `ng generate component lifecycle/main-lifecycle`
 59. Import lifecycle hook classes to `main-lifecycle`
```javascript
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
  ```
  60. Implement all hooks
  61. `ContentProjectionComponent`
  62. Create a directive within contentProjection
  > `ng generate directive content-projection/popup`
  63. Import HostListener and Input to `popup.directive`
  ```javascript
  import { Directive, ElementRef, Input , HostListener} from '@angular/core';
```
64. UTilize HostListener and ElementRef
65. Utilize exportAs to remotely call popup
66. create component for content projection
> `ng generate component content-projection/content`
67. Input ng-content into `content.component`
```html
<h1>{{content_title}}</h1>
<pre><ng-content></ng-content></pre>
```
68. `MiscComponent`
69. Import Class required for component
```javascript
import { Component, OnInit,
  IterableDiffers, KeyValueDiffers, ElementRef,
   DoCheck, EventEmitter, AfterContentInit} from '@angular/core';
import { Observable} from 'rxjs';
```
70. Type in code required to do elementRef dom manipulation, $event, and Differs (with ngDoCheck)
