import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product|undefined;

  constructor( private route: ActivatedRoute, private cartService: CartService
    ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    console.log(routeParams, productIdFromRoute)
    this.product = products.find(product => product.id === productIdFromRoute);

  }

  addToCart(product: Product): void{
    this.cartService.addToCart(product);
    alert("Add")
  }

}
