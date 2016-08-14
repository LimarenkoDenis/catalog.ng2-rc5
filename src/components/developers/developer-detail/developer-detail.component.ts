
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Developer } from './../developer';
import { DevelopersService } from './../developers.service';

@Component({
  selector: 'my-developer-detail',
  templateUrl: 'developer-detail.component.html'
})
export class DeveloperDetailComponent implements OnInit {
  developer: Developer;

  constructor(
    private DevelopersService: DevelopersService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.DevelopersService.getDeveloper(id)
        .then(developer => this.developer = developer);
    });
  }

  goBack() {
    window.history.back();
  }
}
