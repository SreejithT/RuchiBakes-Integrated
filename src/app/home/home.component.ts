import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  // public sliderleft=false
  // public sliderright=true

  constructor() { }

  ngOnInit(): void {
  }
  

  // changesliderleft(){
  //   this.sliderleft=false
  //   this.sliderright=true
  // }
  // changesliderright(){
  //   this.sliderright=false
  //   this.sliderleft=true
  // }

  slideConfig = {
    slidesToShow: 2, 
    slidesToScroll: 2,
    dots: true,
  infinite: false,
  
  speed: 300,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  };

  next() {
    this.slickModal.slickNext();
  }
  
  prev() {
    this.slickModal.slickPrev();
  }



  

  

}
