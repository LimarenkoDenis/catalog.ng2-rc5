import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }     from './heroes/hero/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { CustomersListComponent }  from './customers/customers-list/customers-list.component.ts';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
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
