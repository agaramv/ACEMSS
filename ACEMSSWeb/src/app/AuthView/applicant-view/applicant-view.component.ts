import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-applicant-view',
  templateUrl: './applicant-view.component.html',
  styleUrls: ['./applicant-view.component.css']
})
export class ApplicantViewComponent implements OnInit {
  applicants = []
  columns = ["Date","Position","Name","Email", "Phone", "File"]
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

  viewFile(fileUrl){
    const byteArray = new Uint8Array(
      atob(fileUrl.replace('data:application/pdf;base64,', '')).split('').map(char => char.charCodeAt(0))
    );
    let blob = new Blob([byteArray], { type: 'application/pdf' });
    var url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  }

}
