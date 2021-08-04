import { products } from './../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {



  constructor() { }

  products =  products


  ngOnInit(): void {
  }


  share() {
    alert('The product has been shared!');
  }
  onNotify() {
    alert('You will be notified when the product goes on sale');}

}
