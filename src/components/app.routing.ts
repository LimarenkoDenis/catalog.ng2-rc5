import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroesComponent }     from './hero/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CustomersListComponent }  from './customers/customers-list/customers-list.component.ts';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'customers',
    component: CustomersListComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
