import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from 'src/app/Services/product.service';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
@Input() product:Product = new Product(); 
constructor(private ProductService:ProductService,private ActivatedRoute:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void 
  {
    console.log("ID",this.ActivatedRoute.snapshot.params["ID"])
    if(this.ActivatedRoute.snapshot.params["ID"] != undefined)
    {
      this.ProductService.GetByID(this.ActivatedRoute.snapshot.params["ID"]).subscribe(data => {
        this.product = data;
      })
    }
  }
  add()
  {
    this.ProductService.Add(this.product).subscribe(data => 
      {
        console.log("Component:AddProduct/Method:add()/this.product",data);
        this.Router.navigate(["/products"]);
      })
  }

  update()
  {
    this.ProductService.Update(this.product).subscribe(s => {
      console.log("component:AddProduct/Method:update()/this.product",s);
      this.Router.navigate(['/products']);
    })
    
  }
}
