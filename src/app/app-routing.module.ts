import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {VoterViewComponent} from './voter-view/voter-view.component';
import {LoginComponent} from './login/login.component';
import {AuthServiceService as Auth} from './auth-service.service';

const routes: Routes = [
  {path: 'admin',
    component: AdminViewComponent,
    canActivate: [Auth] },
  {path: '', component: VoterViewComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
