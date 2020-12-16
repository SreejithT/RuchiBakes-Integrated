import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SlickCarouselModule} from 'ngx-slick-carousel'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { HeaderComponent } from './header/header.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CartComponent,
    OrderpageComponent,
    HeaderComponent,
    OrderStatusComponent,
    ProductDetailsComponent,
    ProductComponent,
    HomeComponent,
    BlogComponent,
    BlogdetailsComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
