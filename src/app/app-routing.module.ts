import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  { 
  	path: '', 
      loadChildren: 'app/home/home.module#HomeModule',
      canActivate: [AuthGuard],
    },
    { 
   	  path: 'auth', 
   	  loadChildren: 'app/auth/auth.module#AuthModule' 
   	}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
