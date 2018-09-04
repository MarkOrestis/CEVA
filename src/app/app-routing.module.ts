import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotingComponent } from '../../src/app/voting/voting.component';

const routes: Routes = [
  { path: '', redirectTo: '/voting', pathMatch: 'full' },
  { path: 'voting', component: VotingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
