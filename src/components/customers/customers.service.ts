/* global process.env.API*/

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CustomersService {
  constructor (private http: Http) {}
  list () {
    return this.http.get(`${process.env.API}/customers`)
                    .map(res => res.json())
  }

  detail (id:string) {
    return this.http.get(`${process.env.API}/customers/${id}`)
                    .map(res => res.json())
  }
}
