import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent {

  /*
  In the ProductAlertsComponent class definition, define a property named product with an @Input() decorator. 
  The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  */

  constructor() { }

  @Input() product: Product | undefined
  @Output() notify = new EventEmitter();

}
