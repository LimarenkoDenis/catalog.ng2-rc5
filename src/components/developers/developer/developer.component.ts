import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Developer } from './../developer';
import { DevelopersService } from './../developers.service';

@Component({
  selector: 'my-developers',
  templateUrl: 'developers.component.html'
})
export class DevelopersComponent implements OnInit {
  developers: Developer[];
  selectedDev: Developer;

  constructor(private router: Router, private DevelopersService: DevelopersService) { }

  getDevelopers() {
    this.DevelopersService.getDevelopers().then(developers => this.developers = developers);
  }

  ngOnInit() {
    this.getDevelopers();
  }

  onSelect(developer: Developer) { this.selectedDev = developer; }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedDev.id]);
  }
}
