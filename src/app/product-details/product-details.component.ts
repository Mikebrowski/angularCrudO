import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product,products } from 'src/app/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product |undefined

  constructor(private route: ActivatedRoute) { 
/*
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('proudctId'));
    const productfromRoute = String(routeParams.get('name'));

    console.log(routeParams)
    console.log(productfromRoute)

    //this.product.find(this.product => proudct === productfromRoute)
    this.product = products.find(product => product.id === productIdFromRoute);
 */   
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('proudctId'));
    const productfromRoute = String(routeParams.get('name'));

    console.log(routeParams)
    console.log(productfromRoute)

    //this.product.find(this.product => proudct === productfromRoute)
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
