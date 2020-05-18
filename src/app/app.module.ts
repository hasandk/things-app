import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PortalComponent } from './portal/portal.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import {MatCardModule} from '@angular/material/card';
import { AppState } from './redux/store';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { rootReducer } from './redux/store'; // Added this to get the root reducer
import { HttpClientModule } from '@angular/common/http';
import { ThingListComponent } from './thing-list/thing-list.component';
import { RegisterThingComponent } from './register-thing/register-thing.component';
import { FilterThing } from './thing-list/thing.filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    RegisterComponent,
    PortalComponent,
    UserAdminComponent,
    RegisterThingComponent,
    ThingListComponent, FilterThing
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatButtonModule, MatToolbarModule, MatCardModule, MatProgressBarModule,
    ReactiveFormsModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>,
              private devTool: DevToolsExtension,
              private ngReduxRouter: NgReduxRouter) {

                this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);

    ngReduxRouter.initialize(/* args */);
  }
 }
