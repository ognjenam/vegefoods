import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private services : CategoryService) { }
  public categories: [];

  ngOnInit() {
    this.services.getAllCategories().subscribe(
      (Response:[]) => {
        this.categories = Response;
      },
      error => {
        console.log("Error: " + error);
      }
    )

  }

}
