import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product: Product|undefined;
  @Output() notify = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  emitir(){
    this.notify.emit()
  }

}
