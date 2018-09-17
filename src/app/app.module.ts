import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import { ProjectsComponent } from './voter/projects-view/projects.component';
import { ExpoMapComponent } from './voter/expo-map-view/expo-map.component';
import { HomeComponent } from './voter/home-view/home.component';
import { MatCardModule} from '@angular/material';
import { MatButtonModule} from '@angular/material';
import { MatExpansionModule} from '@angular/material';
import { MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {FormsModule} from '@angular/forms';
import { VoteConfirmationDialogComponent } from './components/vote-confirmation-dialog/vote-confirmation-dialog.component';
import { CommentConfirmationDialogComponent } from './components/comment-confirmation-dialog/comment-confirmation-dialog.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { VoterViewComponent } from './voter/voter-view/voter-view.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminToolbarComponent } from './admin/admin-toolbar/admin-toolbar.component';
import { AddProjectsComponent } from './admin/add-projects/add-projects.component';
import { ViewResultsComponent } from './admin/view-results/view-results.component';
import { CreateExpoMapComponent } from './admin/create-expo-map/create-expo-map.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ExpoMapComponent,
    HomeComponent,
    VoteConfirmationDialogComponent,
    CommentConfirmationDialogComponent,
    AdminViewComponent,
    VoterViewComponent,
    LoginComponent,
    AdminToolbarComponent,
    AddProjectsComponent,
    ViewResultsComponent,
    CreateExpoMapComponent
  ],
  entryComponents: [
    VoteConfirmationDialogComponent,
    CommentConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatChipsModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
