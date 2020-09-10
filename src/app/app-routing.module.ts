import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './components/user-form/user-form.component';
import { HomeComponent } from './components/home/home.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CompraExitosaComponent } from './compra-exitosa/compra-exitosa.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: UserFormComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
    path: 'tienda',
    component: ProductListComponent
  },
  {
    path: 'c-exitosa',
    component: CompraExitosaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
