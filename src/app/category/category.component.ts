import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Product } from '../product';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category_name;
  category_id;
  categories;
  category;
  productsByCategory : Product[] = [];
  public products: Product[];






  constructor(private services : ProductService, private CategoryService: CategoryService, private route: ActivatedRoute ) {

    this.category_name= this.route.snapshot.params['name'];

    this.route.queryParams.subscribe((params : Params) => {
      this.category_id = params['id'];
    });
  }


  ngOnInit(){

    this.services.getAllProducts().subscribe(
      (Response:[]) => {
        this.products = Response;

        for(let i = 0; i < this.products.length; i++)
        {
          if(this.products[i].category_id == this.category_id)
          {
            this.productsByCategory.push(
              {
                id : this.products[i].id,
                category_id : +this.category_id,
                name : this.products[i].name,
                image : this.products[i].image,
                description : this.products[i].description,
                price : this.products[i].price
              }

            );
          }
        }

      },
      error => {
        console.log("Error: " + error);
      }
    )

    this.CategoryService.getAllCategories().subscribe(
      Response => {
        this.categories = Response;


        for(let i = 0; i < this.categories.length; i++)
        {
          if(this.categories[i].id == this.category_id)
          {
            this.category = this.categories[i];
            break;
          }

        }

      },
      error => {
        console.log("Error: " + error);
      }
    )
  }

}
