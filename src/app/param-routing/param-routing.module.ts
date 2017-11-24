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

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: ':id', component: ParamViewComponent },
];

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductsModule { }
