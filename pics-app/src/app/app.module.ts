import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import { StoreFrontComponent } from './store-front/store-front.component';
import { ProductCompComponent } from './product-comp/product-comp.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes} from "@angular/router";
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
{ path:'Home', component: StoreFrontComponent},
  {
    path : '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path:'Login', component:LoginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    StoreFrontComponent,
    ProductCompComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule, MatCardModule,
    MatInputModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
