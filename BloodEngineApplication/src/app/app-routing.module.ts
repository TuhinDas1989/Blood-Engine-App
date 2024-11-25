import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { CanDeactivateGuard } from './core/services/can-deactivate-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})

export class AppRoutingModule { }
