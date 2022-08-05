import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { products } from 'src/app/product';
import { Product } from 'src/app/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit{

  constructor() { }


  ngAfterViewInit(): void {
    this.showMeOutput();
  }
   products = products;

   @Input() product: Product | undefined
   @Output() notify = new EventEmitter();

  PRESSTHISFORFUN(){
    window.alert('the products has been shared! right NOW!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  
  showMeOutput(){
    console.log(products)
    console.log(Input)
  }


}
