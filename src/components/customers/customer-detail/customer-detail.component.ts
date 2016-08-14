import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'customer-detail',
  template: require('./customer-detail.html'),
  providers: [CustomersService]
})

export class CustomerDetailComponent {
  customer = {};
  private sub: any;
  constructor(private CustomersService: CustomersService){}

  detail(id:string) {
    this.CustomersService.detail(id)
      .subscribe(
      (customer:any) => {
        this.customer = customer;
       });
  }

  ngOnInit(){
    // this.sub = this.route
    //   .params
    //   .subscribe( params => {
    //     let id = params['id'];
    //     this.detail(id);
    //   });
  }
}
