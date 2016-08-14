import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  selector: 'customer',
  template: require('./customer.html')
})

export class CustomerComponent{
  @Input()
  customers: any;
  customer: any;
}