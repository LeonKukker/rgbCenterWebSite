import { Component, OnInit } from '@angular/core';
import { ProductsArray } from '../objects/producttest';

@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.css']
})
export class StoreFrontComponent implements OnInit {
  CatText;

  constructor() {
  }

  ngOnInit() {
  const product = new ProductsArray();
  this.CatText = product.products[0];
  }

}
