import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { CustomerComponent } from './../customer/customer.component';


@Component({
    selector: 'customers-list',
    template: require('./customers-list.html'),
    providers: [CustomersService],
    directives: [CustomerComponent]
})

export class CustomersListComponent {
    customers: any;
    count: number;
    constructor(private CustomersService: CustomersService) { }

    list() {
        this.CustomersService.list()
            .subscribe(
            (customers: any) => {
                this.count = customers.length;
                this.customers = customers
            });
    }

    ngOnInit() {
        this.list();
    }

}
