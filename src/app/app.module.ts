import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { customDirective } from './login/login.directive';
import { NewpostComponent } from './newpost/newpost.component';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SpeedDialModule } from 'primeng/speeddial';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PostsComponent } from './posts/posts.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'posts', component: NewpostComponent },
  { path: 'detailposts', component: PostsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    customDirective,
    NewpostComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    ScrollPanelModule,
    AngularFirestoreModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    AccordionModule,
    FormsModule,
    SpeedDialModule,
    CardModule,
    ReactiveFormsModule,
    EditorModule,
    InputTextModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled',
    }),
    TabMenuModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
