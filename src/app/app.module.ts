import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { RegionListComponent } from './contact-page/region-list/region-list.component';
import { HttpModule } from '@angular/http';
import { CalendarComponent } from './price-page/calendar/calendar.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogDetailComponent } from './blog-page/blog-detail/blog-detail.component';
import { BlogInfoComponent } from './blog-page/blog-info/blog-info.component';
import { BlogListComponent } from './blog-page/blog-list/blog-list.component';
import { BlogItemComponent } from './blog-page/blog-list/blog-item/blog-item.component';

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
    PricePageComponent,
    RegionListComponent,
    CalendarComponent,
    BlogPageComponent,
    BlogDetailComponent,
    BlogInfoComponent,
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }