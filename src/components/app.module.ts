import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { DevelopersComponent }      from './developers/developer/developer.component';
import { DeveloperDetailComponent }  from './developers/developer-detail/developer-detail.component';
import { CustomersListComponent }  from './customers/customers-list/customers-list.component.ts';


import { DevelopersService }        from './developers/developers.service';
import { CustomersService }        from './customers/customers.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DevelopersComponent,
    DeveloperDetailComponent,
    CustomersListComponent
  ],
  providers: [
    DevelopersService,
    CustomersService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
