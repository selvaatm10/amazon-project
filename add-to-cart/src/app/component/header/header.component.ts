import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : any = 0;

  constructor(private cartservise:CartService) { }

  ngOnInit(): void {
    this.cartservise.getProduct()
    .subscribe((res=>{
      this.totalItem = res.length;
    }))
  }

}
