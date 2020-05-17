import { AdminGuard } from './auth/admin.guard';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PortalComponent } from './portal/portal.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { ThingListComponent} from './thing-list/thing-list.component'
import { RegisterThingComponent } from './register-thing/register-thing.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},  
  {path: 'register', component: RegisterComponent},
  {path: 'portal', component: PortalComponent , canActivate: [AuthGuard], children: [
    {path: 'thing-list', component: ThingListComponent},
    {path: 'register-thing', component: RegisterThingComponent},
    {path: 'user-admin', component: UserAdminComponent, canActivate: [AdminGuard]}
  ]},
  

  { path: '**', component: PageNotFoundComponent }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
