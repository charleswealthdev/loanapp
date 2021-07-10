import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmintokenService {

  public iss = {
    login:"http://localhost:8081/api/adminlogin",
    signup:"http://localhost:8081/api/adminsignup"
  }

  constructor() { }

  handle(token){
    this.set(token);
 }

 set(token){
   localStorage.setItem('admintoken', token)
 }

 get(){
   return localStorage.getItem('admintoken');
 }

 remove(){
   localStorage.removeItem('admintoken');
 }

 isValid(){
   const token = this.get();
   if(token){
     const payload = this.payload(token);
     if(payload){
         return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
     }
   }
   return false;
 }

 payload(token){
   const payload = token.split('.')[1];
    return this.decode(payload);
 }

 decode(payload){
   return JSON.parse(atob(payload)); 
 }

 loggedIn(){
   return this.isValid();
 }

}
