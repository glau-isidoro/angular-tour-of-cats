import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'cats', component: CatsComponent },
  { path: 'dashboard', component: DashboardComponent }
  { path: 'detail/:id', component: CatDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
