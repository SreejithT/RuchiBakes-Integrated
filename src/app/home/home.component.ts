import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public sliderleft=false
  public sliderright=true

  constructor() { }

  ngOnInit(): void {
  }

  changesliderleft(){
    this.sliderleft=false
    this.sliderright=true
  }
  changesliderright(){
    this.sliderright=false
    this.sliderleft=true
  }

}
