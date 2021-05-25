import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  endpoint = environment.apiUrl;
  constructor(private http: HttpClient) { }

  //Contact US Apis
  getAllMessages(){
    return this.http.get<any>(this.endpoint+"/message/all");
  }

  addContactMessage(message){
    return this.http.post<any>(this.endpoint+"/message/add",message)
  }


  //Career/Applicant Apis
  getAllApplicants(){
    return this.http.get<any>(this.endpoint+"/applicant/all");
  }

  addApplicant(applicant){
    return this.http.post<any>(this.endpoint+"/applicant/add",applicant)
  }

}
