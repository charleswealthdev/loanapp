import { Router } from '@angular/router';
import { LoanService } from './../../Services/loan.service';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatwithus',
  templateUrl: './chatwithus.component.html',
  styleUrls: ['./chatwithus.component.css']
})
export class ChatwithusComponent implements OnInit {
 
  public id = JSON.parse(localStorage.getItem('loggedUser')).user.id || [];
  public user = JSON.parse(localStorage.getItem('loggedUser')).user || [];
  public mymessages;
  public chat;
  public messageArr : any;
  public messageId = 0;

  constructor(
    public adminApi: OfferloanService,
    public api: LoanService,
    public router: Router
  ) { }

  ngOnInit(): void {
    let localmessges = JSON.parse(localStorage.getItem('chats')) || [];
    this.adminApi.getchats().subscribe((data:any) => {
      this.messageArr = data;
    })
  }

  sendMessage(){
      let data = {
        id: this.id,
        messages: this.chat,
        status: "user", messageId: this.messageId++
      }
      if(!this.chat){
        return;
      } 
      
      else {
        let localmessges = JSON.parse(localStorage.getItem('chats')) || [];
        let spreadmessage = [...localmessges, data];
        localStorage.setItem('chats', JSON.stringify(spreadmessage));
        this.messageArr = spreadmessage;
  
        this.adminApi.postchats(data).subscribe((data:any) => {
           console.log(data)
        }, error => console.log(error))
        this.chat = "";
      }
      // this.mymessages = this.chat;
  }

}
