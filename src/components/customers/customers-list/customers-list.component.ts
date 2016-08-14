import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
    selector: 'customers-list',
    template: require('./customers-list.html'),
    providers: [CustomersService],
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
