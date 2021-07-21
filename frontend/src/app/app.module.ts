import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { UserregComponent } from './userreg/userreg.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetresponseComponent } from './password/response/resetresponse/resetresponse.component';
import { ResetpasswordComponent } from './password/reset/resetpassword/resetpassword.component';
import { MatFormFieldModule, MatSelectModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule } from '@angular/material';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { FundwalletComponent } from './fundwallet/fundwallet.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { TokencompComponent } from './tokencomp/tokencomp.component';
import { UserwalletComponent } from './userwallet/userwallet.component';
import { TransferComponent } from './transferfolder/transfer/transfer.component';
import { AtmcompComponent } from './atmcomp/atmcomp.component';
import {MatBadgeModule} from '@angular/material/badge';
import { NotificationsComponent } from './notifications/notifications.component';
import { AtmviewComponent } from './atmview/atmview.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ChoosebankComponent } from './transferfolder/choosebank/choosebank.component';
import { OtherbanksComponent } from './transferfolder/otherbanks/otherbanks.component';
import { CashloanComponent } from './transferfolder/cashloan/cashloan.component';
import { BankComponent } from './withdrawfolder/bank/bank.component';
import { LoanComponent } from './withdrawfolder/loan/loan.component';
import { PincompComponent } from './withdrawfolder/pincomp/pincomp.component';
import { AmountComponent } from './withdrawfolder/amount/amount.component';
import { NewamountComponent } from './withdrawfolder/newamount/newamount.component';
import { AcctTypeComponent } from './withdrawfolder/acct-type/acct-type.component';
import { WithdrawComponent } from './withdrawfolder/withdraw/withdraw.component';
import { CanceloperationComponent } from './withdrawfolder/canceloperation/canceloperation.component';
import { ReceiptComponent } from './withdrawfolder/receipt/receipt.component';
import { ProcessComponent } from './withdrawfolder/process/process.component';
import { GetloanComponent } from './loanfolder/getloan/getloan.component';
import { AdminLoginComponent } from './adminfolder/admin-login/admin-login.component';
import { AdminRegisterComponent } from './adminfolder/admin-register/admin-register.component';
import { AdminsidebarComponent } from './adminfolder/adminsidebar/adminsidebar.component';
import { AdmindashboardComponent } from './adminfolder/admindashboard/admindashboard.component';
import { CategoryComponent } from './adminfolder/category/category.component';
import { RequestComponent } from './adminfolder/request/request.component';
import { TermsconditionsComponent } from './adminfolder/termsconditions/termsconditions.component';
import { AddloanComponent } from './adminfolder/addloan/addloan.component';
import { AllcategoriesComponent } from './adminfolder/allcategories/allcategories.component';
import { EditdialogComponent } from './adminfolder/editdialog/editdialog.component';
import { DeletedialogComponent } from './adminfolder/deletedialog/deletedialog.component';
import { ListofloansComponent } from './loanfolder/listofloans/listofloans.component';
import { MyloansComponent } from './loanfolder/myloans/myloans.component';
import { InsufficientdialogComponent } from './loanfolder/insufficientdialog/insufficientdialog.component';
import { ProcessingloanComponent } from './loanfolder/processingloan/processingloan.component';
import { LoantransactionsComponent } from './loanfolder/loantransactions/loantransactions.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppliedialogComponent } from './loanfolder/appliedialog/appliedialog.component';
import { BillpaymentComponent } from './loanfolder/billpayment/billpayment.component';
import { ContactComponent } from './loanfolder/contact/contact.component';
import { ChatwithusComponent } from './loanfolder/chatwithus/chatwithus.component';
import { PaymentdialogComponent } from './loanfolder/paymentdialog/paymentdialog.component';
import { MessagesComponent } from './adminfolder/messages/messages.component';
import { NetworksComponent } from './airtimefolder/networks/networks.component';
import { MtnComponent } from './airtimefolder/mtn/mtn.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { VtusComponent } from './airtimefolder/vtus/vtus.component';
import { SuccessdialogComponent } from './airtimefolder/successdialog/successdialog.component';
import { AirtimehistroyComponent } from './airtimefolder/airtimehistroy/airtimehistroy.component';
import { DatabundlesComponent } from './airtimefolder/databundles/databundles.component';
import { MaximumdialogComponent } from './loanfolder/maximumdialog/maximumdialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UserDashboardComponent,
    NavbarComponent,
    UserregComponent,
    SidebarComponent,
    ResetpasswordComponent,
    ResetresponseComponent,
    LoanrequestComponent,
    FundwalletComponent,
    TokencompComponent,
    UserwalletComponent,
    TransferComponent,
    AtmcompComponent,
    NotificationsComponent,
    AtmviewComponent,
    TransactionComponent,
    ChoosebankComponent,
    OtherbanksComponent,
    CashloanComponent,
    WithdrawComponent,
    BankComponent,
    LoanComponent,
    PincompComponent,
    AmountComponent,
    NewamountComponent,
    AcctTypeComponent,
    CanceloperationComponent,
    ReceiptComponent,
    ProcessComponent,
    GetloanComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminsidebarComponent,
    AdmindashboardComponent,
    CategoryComponent,
    RequestComponent,
    TermsconditionsComponent,
    AddloanComponent,
    AllcategoriesComponent,
    EditdialogComponent,
    DeletedialogComponent,
    ListofloansComponent,
    MyloansComponent,
    InsufficientdialogComponent,
    ProcessingloanComponent,
    LoantransactionsComponent,
    AppliedialogComponent,
    BillpaymentComponent,
    ContactComponent,
    ChatwithusComponent,
    PaymentdialogComponent,
    MessagesComponent,
    NetworksComponent,
    MtnComponent,
    UserprofileComponent,
    VtusComponent,
    SuccessdialogComponent,
    AirtimehistroyComponent,
    DatabundlesComponent,
    MaximumdialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatRadioModule,
    MatBadgeModule,
    MatStepperModule,
    ChartsModule,
    NgxPaginationModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    Ng2SearchPipeModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
