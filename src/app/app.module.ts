import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { PeopleComponent } from './about-page/people/people.component';
import { PeopleListComponent } from './about-page/people/people-list/people-list.component';
import { ServiceDetailComponent } from './service-page/service-detail/service-detail.component';
import { ServiceListComponent } from './service-page/service-list/service-list.component';
import { ServiceItemComponent } from './service-page/service-list/service-item/service-item.component';
import { ServiceInfoComponent } from './service-page/service-info/service-info.component';
import { WildPageComponent } from './wild-page/wild-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { FaqListComponent } from './faq-page/faq-list/faq-list.component';
import { FaqItemComponent } from './faq-page/faq-list/faq-item/faq-item.component';
import { PricePageComponent } from './price-page/price-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ServicePageComponent,
    PeopleComponent,
    PeopleListComponent,
    ServiceDetailComponent,
    ServiceListComponent,
    ServiceItemComponent,
    ServiceInfoComponent,
    WildPageComponent,
    FaqPageComponent,
    FaqListComponent,
    FaqItemComponent,
    PricePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }