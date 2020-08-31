import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit 
{
  productList:Array<Product>  = new Array<Product>();
  product:Product = new Product();
  img = true;
  constructor(private ProductService:ProductService,private Activatedroute:Router) { }

  ngOnInit(): void
  {

    this.ProductService.GetAll().subscribe(data => 
    {
      this.productList = data;
      console.log("Component:Product,GettAllProduct",data);
      this.img = false;
    });

  }
  update(product:Product)
  {
    this.Activatedroute.navigate(['/addproduct',product])
  }

}
