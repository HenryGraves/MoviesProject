import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { ListService } from './list.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    NavComponent,
    FooterComponent,
    WelcomeComponent,
    ListComponent,
    DetailComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'list', component: ListComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '**', component: WelcomeComponent }
    ])
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
