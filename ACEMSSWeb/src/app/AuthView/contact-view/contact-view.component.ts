import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  messages = []
  messageType="All"
  columns = ["Date","Name","Email", "Phone", "Message"]
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    // this.getAllMessages()
    this.getUnreadMessages()
  }

  getAllMessages(){
    this.appService.getAllMessages().subscribe(data=>{
      console.log(data);
      this.messages = data;
      this.messageType="All"
    })
  }

  markAsRead(i){
    console.log(i)
    this.messages[i].status='R';
    console.log(this.messages[i])
    this.appService.updateContactMessage(this.messages[i]).subscribe(data=>{
      console.log(data)
      this.getUnreadMessages();
    })
  }

  getUnreadMessages(){
    this.appService.getUnreadMessages().subscribe(data=>{
      console.log(data);
      this.messages = data;
      this.messageType="Unread"
    })
  }

  getReadMessages(){
    this.appService.getReadMessages().subscribe(data=>{
      console.log(data);
      this.messages = data;
      this.messageType="Read"
    })
  }

}
