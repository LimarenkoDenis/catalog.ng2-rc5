import { Routes, RouterModule } from '@angular/router';

import { DevelopersComponent }      from './developers/developer/developer.component';
import { DeveloperDetailComponent }  from './developers/developer-detail/developer-detail.component';
import { CustomersListComponent }  from './customers/customers-list/customers-list.component.ts';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/developers',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: DeveloperDetailComponent
  },
  {
    path: 'developers',
    component: DevelopersComponent
  },
  {
    path: 'customers',
    component: CustomersListComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
