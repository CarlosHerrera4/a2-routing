import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';

  


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'contact/:thecontact', component: ContactsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
