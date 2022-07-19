import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; 
import { UserComponent } from './user/user.component';
import { IndididualuserinfoComponent } from './indididualuserinfo/indididualuserinfo.component';
import { AddusersComponent } from './addusers/addusers.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { RxjssampleComponent } from './rxjssample/rxjssample.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
	{ path: 'service', component: ServicesComponent },
	{ path: 'contuctus', component: ContactusComponent },
  // { path: '', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
  { path: 'adduser', component: AddusersComponent },
  { path: 'individualuser/:id/:userName/:phoneNumber/:email/:password/:confirmPassword', component: IndididualuserinfoComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'individualuser', component: IndididualuserinfoComponent },
  { path: 'sample', component: SampleformComponent },
  {path: 'user', component: UserComponent },
  {path: 'navi', component: NavigationbarComponent },
  {path: 'RXJS', component: RxjssampleComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
