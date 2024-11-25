import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NoCacheHeaderInterceptor } from './core/NoCacheHeaderInterceptor';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md'
// MDB Angular Free
import { CheckboxModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md'
// import { TabsModule } from 'ng-uikit-pro-standard'
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MaterialModule } from './core/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    FaqComponent,
    LoginComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMultiSelectModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    CarouselModule,
    WavesModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    ButtonsModule,
    CheckboxModule, InputsModule, IconsModule, CardsModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoCacheHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor() { }
}
