import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
  path: 'add',
  component: AddRestoComponent
  },
  {
    path: 'update/:id',
    component: UpdateRestoComponent
  },
  {
    path: 'register',
    component: RegisterComponent
 },
 
 {
  path: 'login',
  component: LoginComponent
},
{
  path: '',
  component: ListRestoComponent
}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
