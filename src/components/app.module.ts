import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { HeroesComponent }      from './hero/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { CustomersListComponent }  from './customers/customers-list/customers-list.component.ts';


import { HeroService }        from './hero/hero.service';
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
    HeroesComponent,
    HeroDetailComponent,
    CustomersListComponent
  ],
  providers: [
    HeroService,
    CustomersService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
