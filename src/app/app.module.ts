import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhyComponent } from './why/why.component';
import { PocComponent } from './poc/poc.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhyComponent,
    PocComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
