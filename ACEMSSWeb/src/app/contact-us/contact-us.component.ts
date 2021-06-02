import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.maxLength(45)]],
    lastName: ["", [Validators.required, Validators.maxLength(45)]],
    email: ["",[Validators.required, Validators.email]],
    phone: ["", [Validators.required, Validators.min(5)]],
    message: ["", [Validators.required]],
  })
  submitted=false;

  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit(): void {
    this.getAllMessages()
  }

  submit(){
    this.submitted=true;
    console.log(this.contactForm);
    var date = new Date();
    console.log(date.toJSON().substring(0,10))
    if(this.contactForm.invalid){
      console.log("Invalid")
      this.contactForm.markAllAsTouched();
      return
    }
    var messageWithDate = this.contactForm.value;
    messageWithDate.date = date.toJSON().substring(0,10);
    console.log(messageWithDate);
    this.addMessage(messageWithDate);
    this.submitted=false;
  }

  getAllMessages(){
    this.appService.getAllMessages().subscribe(data=>{
      console.log(data);
    })
  }

  addMessage(message){
    this.appService.addContactMessage(message).subscribe(data=>{
      console.log("Success")
    })
  }
}
