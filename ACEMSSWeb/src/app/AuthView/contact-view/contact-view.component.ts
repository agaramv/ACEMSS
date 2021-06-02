import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  messages = []
  columns = ["Date","Name","Email", "Phone", "Message"]
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAllMessages()
  }

  getAllMessages(){
    this.appService.getAllMessages().subscribe(data=>{
      console.log(data);
      this.messages = data;
    })
  }
}
