import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { UserBaseComponent } from './user-base/user-base.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    UserBaseComponent,
    UserProfileComponent,
    HomeComponent,
    TopbarComponent,
    LoginformComponent,
    HomeSliderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
