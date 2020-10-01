import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  data : [];
  total_sum : number = 0;
  products;

  submitted = false;
  country;
  address;
  zip;
  result = null;


  constructor(private route: ActivatedRoute, private router: Router) {

}



  ngOnInit(){

    this.data = JSON.parse(localStorage.getItem("products"));
    // console.log(this.data)




    if(this.data != null)
    {
      for(let i = 0; i < this.data.length; i++)
      {

        this.total_sum += +this.data[i]["price"];

      }

      this.total_sum = +this.total_sum.toFixed(2);
    }

    else {
      this.data = []
    }



  }

  onSubmit(form : NgForm)
  {
    this.submitted = true;
    this.country = form.value.country;
    this.address = form.value.address;
    this.zip = form.value.zip;

    this.result = "Order completed successfully!"



    setTimeout(() => {
      localStorage.clear();
      this.router.navigate(['/']);
    }, 2500)

  }


  removeFromCart(productID)
  {

    try {

      let data = JSON.parse( localStorage.getItem("products"));
      let new_cart_array : object[] = [];
      let new_sum : number = 0;


        for(let i = 0; i < data.length; i++)
        {
          if(productID != i)
          {
            new_cart_array.push(data[i]);
            new_sum += +data[i]["price"];
          }

        }



        this.total_sum = +new_sum.toFixed(2);

        localStorage.setItem('products', JSON.stringify(new_cart_array));

        this.data = JSON.parse(localStorage.getItem("products"));

        // console.log(this.data)



    }

    catch (error) {
      console.log(error)
    }









  }












}
