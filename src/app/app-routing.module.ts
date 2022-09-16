import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PocComponent } from './poc/poc.component';
import { WhyComponent } from './why/why.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'why', component: WhyComponent },
  { path: 'login', component: LoginComponent },

  { path: 'faq', component: FaqComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
