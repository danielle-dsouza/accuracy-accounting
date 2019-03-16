import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { PricePageComponent } from './price-page/price-page.component';
import { WildPageComponent } from './wild-page/wild-page.component';
import { ServiceInfoComponent } from './service-page/service-info/service-info.component';
import { ServiceDetailComponent } from './service-page/service-detail/service-detail.component';
import { FaqPageComponent } from './faq-page/faq-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'services', component: ServicePageComponent, children: [
    { path: '', component: ServiceInfoComponent },
    { path: ':id', component: ServiceDetailComponent }
  ] },
  { path: 'pricing', component: PricePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'not-found', component: WildPageComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
