import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'customer-detail',
  template: require('./customer-detail.html'),
  providers: [CustomersService]
})

export class CustomerDetailComponent {
  customer = {};
  private sub: any;
  constructor(private CustomersService: CustomersService,  private route: ActivatedRoute){}

  detail(id:string) {
    this.CustomersService.detail(id)
      .subscribe(
      (customer:any) => {
        this.customer = customer;
       });
  }

  ngOnInit(){
    this.sub = this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
          this.detail(id);
        });
  }
}
