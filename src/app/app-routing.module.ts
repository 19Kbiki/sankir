import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PocComponent } from './poc/poc.component';
import { WhyComponent } from './why/why.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'why', component: WhyComponent },
  { path: 'poc', component: PocComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
