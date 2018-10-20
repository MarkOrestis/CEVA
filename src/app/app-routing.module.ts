import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminViewComponent} from './admin/admin-view/admin-view.component';
import {VoterViewComponent} from './voter/voter-view/voter-view.component';
import {LoginComponent} from './admin/login/login.component';
import {AuthServiceService as Auth} from './auth-service.service';
import {CreateExpoMapComponent} from './admin/create-expo-map/create-expo-map.component';
import {ViewResultsComponent} from './admin/view-results/view-results.component';
import {AddProjectsComponent} from './admin/add-projects/add-projects.component';
// import {ExpoInformationComponent} from '.admin/expo-information/expo-information.component';
import {ExpoInformationComponent} from '../app/admin/expo-information/expo-information.component';

const routes: Routes = [
  {path: 'admin',
    component: AdminViewComponent,
    canActivate: [Auth],
    children: [
      {path: '', redirectTo: 'expo/information', pathMatch: 'full'},
      {path: 'map/create', component: CreateExpoMapComponent},
      {path: 'expo/results', component: ViewResultsComponent},
      {path: 'expo/projects', component: AddProjectsComponent},
      {path: 'expo/information', component: ExpoInformationComponent}
    ]},
  {path: '', component: VoterViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'map/create', component: CreateExpoMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
