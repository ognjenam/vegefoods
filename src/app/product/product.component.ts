import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Category } from '../category';
import { Product } from '../Product';
import { Subscription } from 'rxjs';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-product',
  animations : [
    trigger('productImageScale',[
          state('zoomIn', style({
            transform: 'scale(1.2, 1.2)'
          })),
          state('zoomOut', style({
            height: '100%',
            width: '100%'
          })),
          transition('zoomIn => zoomOut',[
            animate('0.2s')
          ]),
          transition('zoomOut => zoomIn',[
            animate('0.5s')
          ])

    ]



    )
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']

})
export class ProductComponent implements OnInit {

  isZoomed : boolean = false;

  paramsSubcription : Subscription;
  id;
  products;
  product : Product;
  category: Category;
  category_name;
  productForCart : {'id' : number, 'category_id' : number, 'name' : string, 'image' : string, 'description' : string, 'price' : number,'category_name' : string};
  categories;

  zoom(isZoomed : any)
  {
    this.isZoomed = isZoomed;

    // console.log(this.isZoomed)
  }

  constructor(private ProductService: ProductService, private CategoryService: CategoryService, private route: ActivatedRoute, private router: Router) {

    this.paramsSubcription = this.route.params.subscribe((params : Params) => {
      this.id = +this.route.snapshot.params['id'];
      this.category_name = this.route.snapshot.params['name'];

    })



   }

  ngOnInit(){
      this.ProductService.getAllProducts().subscribe(
        Response => {
          this.products = Response;


          for(let i = 0; i < this.products.length; i++)
          {
            if(this.products[i].id == this.id)
            {
              this.product = this.products[i]
              break;
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
            if(this.categories[i].name == this.category_name)
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


  addToCart(productID)
  {


    let oldArray = JSON.parse(localStorage.getItem('products')) || [];

    this.ProductService.getAllProducts().subscribe(
      Response => {
        this.products = Response;


        for(let i = 0; i < this.products.length; i++)
        {
          if(this.products[i].id == productID)
          {

            this.productForCart =
              {
                id : this.products[i].id,
                category_id: this.products[i].category_id,
                name : this.products[i].name,
                image : this.products[i].image,
                description : this.products[i].description,
                price : this.products[i].price,
                category_name : this.category_name
              }
              oldArray.push(this.productForCart);
              localStorage.setItem('products', JSON.stringify(oldArray));

              break;
          }


        }

        this.router.navigate(['/', 'cart']);






      },
      error => {
        console.log("Error: " + error);
      }
    )



  }



  ngOnDestroy()
  {
    this.paramsSubcription.unsubscribe()
  }





}
