import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted = false;
  name;
  email;
  subject;
  message;
  result = null;


  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(form : NgForm)
  {
    this.submitted = true;
    this.name = form.value.name;
    this.email = form.value.email;
    this.subject = form.value.subject;
    this.message = form.value.message;

    this.result = "Your message has been successfully sent!"

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2500)







  }

}
