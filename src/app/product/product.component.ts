import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public Scategory=false
  public SIcategory=false
  public HIcategory=true

  public Ssize=false
  public SIsize=false
  public HIsize=true

  public Scolor=false
  public SIcolor=false
  public HIcolor=true

  public Sprice=false
  public SIprice=false
  public HIprice=true

  constructor() { }

  ngOnInit(): void {
  }

  showcategory(){
    this.Scategory=true
    this.HIcategory=false
    this.SIcategory=true
   }
   hidecategory(){
    this.Scategory=false
    this.HIcategory=true
    this.SIcategory=false
   }

   showsize(){
    this.Ssize=true
    this.HIsize=false
    this.SIsize=true
   }
   hidesize(){
    this.Ssize=false
    this.HIsize=true
    this.SIsize=false
   }

   showcolor(){
    this.Scolor=true
    this.HIcolor=false
    this.SIcolor=true
   }
   hidecolor(){
    this.Scolor=false
    this.HIcolor=true
    this.SIcolor=false
   }

   showprice(){
    this.Sprice=true
    this.HIprice=false
    this.SIprice=true
   }
   hideprice(){
    this.Sprice=false
    this.HIprice=true
    this.SIprice=false
   }
   

}
