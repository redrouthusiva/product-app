import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  ProdData: any[] = [];

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
    this.productService.getJSON().subscribe(data => {
      console.log(data);
      this.ProdData = data;
      this.ProdData = this.ProdData.sort((low, high) => high.Price - low.Price);
  });
  }
  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.ProdData = this.ProdData.sort((low, high) => low.Price - high.Price);
          break;
        }

      case "High":
        {
          this.ProdData = this.ProdData.sort((low, high) => high.Price - low.Price);
          break;
        }

      case "ProductTitle":
        {
          this.ProdData = this.ProdData.sort(function (low, high) {
            if (low.ProductTitle < high.ProductTitle) {
              return -1;
            }
            else if (low.ProductTitle > high.ProductTitle) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.ProdData = this.ProdData.sort((low, high) => low.Price - high.Price);
        break;
      }

    }
    return this.ProdData;

  }
  fed(){
    this.router.navigate(['/FeedbackPageComponent'])
  }

}
