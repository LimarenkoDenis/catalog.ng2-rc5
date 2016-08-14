import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'customer',
  template: require('./customer.html')
})

export class CustomerComponent implements OnInit{
  @Input()
  customers = {}
  customer: any;
  constructor(private router: Router){}
  ngOnInit(){
  	console.log(this.customers);
  }
  gotoDetail(id:string) {
    this.router.navigate(['/customers', id]);
  }
}