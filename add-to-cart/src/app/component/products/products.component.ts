import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any;

  constructor(private api: ApiService, private cartservice: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe((res: any) => {
        this.productList = res;

        //used for adding quantity and total in cart section
        
        this.productList.forEach((a:any)=>{
          Object.assign(a,{Quantity:1,total:a.price});
        })
      })
  }

  addToCart(item: any) {
    this.cartservice.addToCart(item);
  }
}
