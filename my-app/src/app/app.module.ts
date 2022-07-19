import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AddusersComponent } from './addusers/addusers.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { IndididualuserinfoComponent } from './indididualuserinfo/indididualuserinfo.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UserinputdialogComponent } from './userinputdialog/userinputdialog.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReadsampleapiComponent } from './readsampleapi/readsampleapi.component';
import { RxjssampleComponent } from './rxjssample/rxjssample.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    ContactusComponent,
    ServicesComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    IndididualuserinfoComponent,
    AddusersComponent,
    UserinputdialogComponent,
    SampleformComponent,
    NavigationbarComponent,
    ParentComponent,
    ChildComponent,
    ReadsampleapiComponent,
    RxjssampleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
