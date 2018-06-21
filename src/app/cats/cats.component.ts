import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { CATS } from '../mock-cats';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})

export class CatsComponent implements OnInit {
  // cat: Cat = {
  //   id: 1,
  //   name: 'Buckminster',
  //   color: 'Calico',
  //   hobby: 'Happily ignoring when being called.'
  // };

  cats = CATS;

  selectedCat: Cat;

  constructor() { }

  ngOnInit() {
  }

  onSelect(cat: Cat): void {
    this.selectedCat = cat;
  }
}
