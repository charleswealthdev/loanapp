import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferloanService {

  api:any = 'http://localhost:8081/api/';
  baseUrl:any = 'http://localhost:8000/api/' 

  constructor(public http: HttpClient) { }

    // login function
    adminlogin(form){
      return this.http.post<any>(`${this.api}adminlogin`, form);
    }
  
    // signup function
    adminsignup(form){
      return this.http.post<any>(`${this.api}adminsignup`, form);
    }

    // fetch all admins
    alladmin(){
      return this.http.get(`${this.api}alladmin`);
    }

    // CATEGORY APIS STARTS HERE

    // submit category
    public category(form){
      return this.http.post<any>(`${this.api}category`, form);
    }

    getcategories(){
      return this.http.get(`${this.api}getcategories`);
    }

    // edit function
    editcategory( id,form){
      return this.http.post<any>(`${this.api}edit/${id}`, form);
    }

    // delete category function
    deletecategory(id){
      return this.http.delete(`${this.api}delete/${id}`);
    }

    // addloan
    public createloan(form){
      return this.http.post(`${this.api}createloan`, form);
    }

    // fetch all loans
    getloans(){
      return this.http.get(`${this.api}getloan`);
    }

    applyforloan(form){
      return this.http.post<any>(`${this.api}requestloan`, form)
    }

    // loan mails
    appliedloanmail(form){
      return this.http.post<any>(`${this.api}loanrequestmail`, form)
    }

    approvedloanmail(form){
      return this.http.post<any>(`${this.api}approvedloan`, form)
    }

    // loan transaction function

    posttransactions(form){
      return this.http.post<any>(`${this.api}posttransactions`, form);
    }
    
    // 
    getrequests(){
      return this.http.get(`${this.api}allrequest`);
    }
   
    // editrequests
  editrequest(form, id){
    return this.http.post<any>(`${this.api}editrequest/${id}`, form);
  }

  //allocation edit
  public editallocation(form, id) {
    return this.http.post<any>(`${this.api}editallocation/${id}`, form);
  }

  editloans(form, randomId){
    return this.http.post<any>(`${this.api}editloan/${randomId}`, form);
  }

  checkpaystacktoken(form, id){
    return this.http.post<any>(`${this.api}payloan/${id}`, form);
  }

  editpaidloan(id, form){
    return this.http.post<any>(`${this.api}editpaidloan/${id}`, form);
  }

  postchats(form){
    return this.http.post<any>(`${this.api}postchat`, form);
  }

  getchats(){
    return this.http.get(`${this.api}getchats`);
  }

  appreview(form){
    return this.http.post<any>(`${this.api}appreview`, form);
  }

  loanpayment(form){
    return this.http.post<any>(`${this.api}loanpayment`, form);
  }

}
