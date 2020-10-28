import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BannerComponent } from './home-page-collection/banner/banner.component';
import { SpecialCruiseComponent } from './home-page-collection/special-cruise/special-cruise.component';
import { CheckDeliverComponent } from './home-page-collection/check-deliver/check-deliver.component';
import { ChefChoiceComponent } from './home-page-collection/chef-choice/chef-choice.component';
import { OurRestaurantComponent } from './home-page-collection/our-restaurant/our-restaurant.component';
import { OurChefComponent } from './home-page-collection/our-chef/our-chef.component';
import { OurCustomerComponent } from './home-page-collection/our-customer/our-customer.component';
import { OurLocationComponent } from './home-page-collection/our-location/our-location.component';
import { OurResourceComponent } from './home-page-collection/our-resource/our-resource.component';
import { HomePageCollectionComponent } from './home-page-collection/home-page-collection.component';


@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    LoginModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    HomePageCollectionComponent,
    BannerComponent,
    SpecialCruiseComponent,
    CheckDeliverComponent,
    ChefChoiceComponent,
    OurRestaurantComponent,
    OurChefComponent,
    OurCustomerComponent,
    OurLocationComponent,
    OurResourceComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
