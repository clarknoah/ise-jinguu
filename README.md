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


## Current Checklist (CAO 14Nov17)

1. Create App
> `ng new ise-jingu`
1. Import bootstrap reflect-metadata font-awesome
> `npm install --save bootstrap font-awesome reflect-metadata`
2. Remove `app` prefix from `angular-cli.json`
2. Create Factory Service
> `ng generate service service/factory`
3. Program service and create function that accepts an array, appends it, and stores it.
3. Inject factory into `app.module`
3. Create Singleton Service
> `ng generate service service/singleton`
4. Program service and create a funciton that accepts an array and appends it, and stores it.
5. import and Inject singleton into `app.module`
6. Create variableService that contains a single string value
7. import and Inject variableService into `app.module`
8. Create AuthService
> `ng generate service service/auth`
9. Add function for login, logout, getUser, and isLoggedIn(boolean)
9. import and Inject AuthService into `app.module`
9. Create LoginComponent
> `ng generate component login`
9. Inject AuthService into LoginComponent
10. Create `login()` and `logout()` functions for LoginComponent
10. Create PopUp Directive
10. Create Content-Projection Component
10. Create DirectivesComponent
> `ng generate component directives`
11. Create FormControlComponent
> `ng generate component form-control`
12. Create FormBuilderComponent
> `ng generate component form-builder`
13. Create FormTwoWayBindingComponent
> `ng generate component form-two-way-binding`
14. Create CustomValidationComponent
> `ng generate component custom-validation`
15. Create DependencyInjectionComponent
> `ng generate component dependency-injection`
16. Create ParamRoutingComponent
> `ng generate component param-routing`
17. Create InputOutputComponent
> `ng generate component input-output`
17. Create HttpComponent
> `ng generate component http`
17. Create LifecycleComponent
> `ng generate component lifecycle`
18. Create MiscComponent
> `ng generate component MiscComponent`
19. Import RouterModule,Routes
```javascript
import {
  RouterModule,
  Routes
} from '@angular/router';
```
20. Create routes: Routes in app.module
```javascript
cost routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DirectivesComponent},
  {path: 'directives', component:DirectivesComponent},
  {path: 'form_control', component:FormControlDirective},
  {path: 'form_builder', component:FormBuilderComponent },
  {path: 'form_two_way_binding', component:FormTwoWayBindingComponent },
  {path: 'custom_validation', component:CustomValidationComponent },
  {path: 'dependency_injection', component:DependencyInjection },
  {path: 'param_routing', component:ParamRoutingComponent },
  {path: 'input_output', component:InputOutputComponent },
  {path: 'http', component: HttpComponent},
  {path: 'misc', component:MiscComponent }
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
24. Add `routerLink` into `app.component.html`
```html
<a [routerLink]="['/directives']">Directives</a>
<a [routerLink]="['/form_control']">Form Control</a>
<a [routerLink]="['/form_builder']">Form Builder</a>
<a [routerLink]="['/form_two_way_binding']">Two-Way Binding</a>
<a [routerLink]="['/custom_validation']">Custom Validation</a>
<a [routerLink]="['/dependency_injection']">Dependency Injection</a>
<a [routerLink]="['/param_routing']">Param Routing</a>
<a [routerLink]="['/input_output']">Input Output Testing</a>
<a [routerLink]="['/http']">Input Output Testing</a>
<a [routerLink]="['/Misc']">Misc</a>
```
