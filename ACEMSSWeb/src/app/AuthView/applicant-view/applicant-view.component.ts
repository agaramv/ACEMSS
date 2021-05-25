import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-applicant-view',
  templateUrl: './applicant-view.component.html',
  styleUrls: ['./applicant-view.component.css']
})
export class ApplicantViewComponent implements OnInit {
  applicants = []
  columns = ["First Name", "Last Name","Email", "Phone", "File"]
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getApplicants()
  }

  getApplicants(){
    this.appService.getAllApplicants().subscribe(data=>{
      console.log(data)
      this.applicants=data;
    })
  }

}
