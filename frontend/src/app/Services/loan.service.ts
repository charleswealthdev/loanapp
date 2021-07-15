import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { request } from 'http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

api:string = 'http://localhost:8000/api/';

public maildetails = <any>{};

public numbers = 0;

  constructor(public http: HttpClient) { }

  // login function
   login (form){
    return this.http.post(`${this.api}login`, form);
  }

  // signup function
  signup(form){
    return this.http.post(`${this.api}signup`, form);
  }

  //fetchhusers
  fetchusers(){
    return this.http.get(`${this.api}fetchusers`);
  }

  // fund function
  funds(form){
      return this.http.post(`${this.api}funds`, form);
  }

  // getfunds function
  getfunds(){
    return this.http.get(`${this.api}getfund`);
  }

  //send mail function
  sendmail(form){
    return this.http.post(`${this.api}send-mail`, form);
  }

  // edit funds
  editfund(id, form){
    return this.http.post(`${this.api}edit/${id}`, form);
  }

  // transaction function
  transaction(form){
    return this.http.post(`${this.api}transaction`, form)
  }

  // atm-request function
  atm_request(form){
    return this.http.post(`${this.api}atm-request`, form)
  }
 
  // atm-mail confirmation
  atm_mail(form){
    return this.http.post(`${this.api}atm-mail`, form)
  }

  // notification function
  notifications(form){
    return this.http.post(`${this.api}notifications`, form)
  }

  // fundmail function
  fundmail(form){
    return this.http.post(`${this.api}fund-mail`, form)
  }

  // fetch all atms
  fetch_atms(){
    return this.http.get(`${this.api}getatms`);
  }

  // fetch notifications
  getnotification(){
    return this.http.get(`${this.api}allnots`);
  }

  deletenotifications(id){
    return this.http.delete(`${this.api}deletes/${id}`);
  }

  notifsHistory(form){
    return this.http.post(`${this.api}nots_history`, form)
  }

  gethistory(){
    return this.http.get(`${this.api}get_nots_history`);
  }

  alltransactions(){
    return this.http.get(`${this.api}alltransactions`);
  }

  transfermail(form){
    return this.http.post(`${this.api}transfermail`, form)
  }
  
  receiptmail(form){
    return this.http.post(`${this.api}receiptmail`, form)
  }
  
  withdrawmail(form){
    return this.http.post(`${this.api}withdrawmail`, form)
  }

  edituser(form, id){
    return this.http.post(`${this.api}edituser/${id}`, form);
  }

  edituserfund(form, id){
    return this.http.post(`${this.api}edituserfund/${id}`, form);
  }

  airtime(form){
    return this.http.post(`${this.api}airtime`, form);
  }

  getairtime(){
    return this.http.get(`${this.api}getairtime`);
  }

}
