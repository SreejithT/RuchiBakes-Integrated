import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public ingredients=true
  public description=false
  
 

  constructor() { }

  ngOnInit(): void {
  }

  showingredients(){
    this.description = false;
    this.ingredients = true;
  
    
   }
   showdescription(){
    this.ingredients = false;
    this.description = true;
   }
   

}
