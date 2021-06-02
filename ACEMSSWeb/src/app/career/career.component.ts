import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
// import { HttpClient } from "@angular/common/http";

export class Job{
  title: string;
  descriptionShort: string;
  descriptionFull: string

  constructor(title: string, descriptionShort:string,descriptionFull: string){
    this.title = title;
    this.descriptionShort = descriptionShort;
    this.descriptionFull=descriptionFull;
  }
}

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  selectedJob:Job;
  jobs:Job[] = []
  fileName="";
  fileSrc;
  submitted=false;

  applyForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.maxLength(45)]],
    lastName: ["", [Validators.required, Validators.maxLength(45)]],
    email: ["",[Validators.required, Validators.email]],
    phone: ["", [Validators.required, Validators.minLength(10)]],
  })

  constructor(private fb:FormBuilder, private appService: AppService) { }

  ngOnInit(): void {
    this.addjob("Job 1","this is a job posting","Full Description")
    this.addjob("Job 2","this is a job posting 2", "Full Description")

  }
  
  addjob(title:string, short:string, full:string){
    this.jobs.push(new Job(title,short,full))
  }

  apply(i:any){
    this.selectedJob = this.jobs[i];
    console.log(this.selectedJob);
  }

  submit(){
    this.submitted=true
    console.log(this.applyForm)
    if(this.applyForm.invalid){
      console.log("Invalid")
      this.applyForm.markAllAsTouched();
      return
    }
    var formData = this.applyForm.value
    var date = new Date();
    formData.fileSrc = this.fileSrc;
    formData.dateApplied = date.toJSON().substring(0,10);
    formData.position = this.selectedJob.title;
    console.log(formData);
    this.addApplicant(formData)
    this.submitted=false;
  }

  onFileSelected(event){
    //make the file type only pdf one resume and cover letter
    const file:File = event.target.files[0];
    
    if(file){
      this.fileName=file.name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.fileSrc = reader.result;
      }
      console.log(this.fileSrc)
    }else{
      console.log("No files")
    }
  }

  uploadForm(){
    // this.http.post("", {}).subscribe((result:any) =>{
    //   console.log(result)
    // })
  }

  /*********
   *  APIs
   */
  addApplicant(applicant){
    this.appService.addApplicant(applicant).subscribe(data=>{
      console.log(data)
    })
  }

  getAllMessages(){
    this.appService.getAllMessages().subscribe(data=>{
      console.log(data);
    })
  }
}
