import { DatabundlesComponent } from './airtimefolder/databundles/databundles.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ContactComponent } from './loanfolder/contact/contact.component';
import { ChatwithusComponent } from './loanfolder/chatwithus/chatwithus.component';
import { LoantransactionsComponent } from './loanfolder/loantransactions/loantransactions.component';
import { MyloansComponent } from './loanfolder/myloans/myloans.component';
import { ListofloansComponent } from './loanfolder/listofloans/listofloans.component';
import { AdmindashboardComponent } from './adminfolder/admindashboard/admindashboard.component';
import { AdminsidebarComponent } from './adminfolder/adminsidebar/adminsidebar.component';
import { AdminafterlogService } from './adminfolder/Servicefolder/adminafterlog.service';
import { AmountComponent } from './withdrawfolder/amount/amount.component';
import { PincompComponent } from './withdrawfolder/pincomp/pincomp.component';
import { LoanComponent } from './withdrawfolder/loan/loan.component';
import { BankComponent } from './withdrawfolder/bank/bank.component';
import { OtherbanksComponent } from './transferfolder/otherbanks/otherbanks.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AtmviewComponent } from './atmview/atmview.component';
import { AtmcompComponent } from './atmcomp/atmcomp.component';
import { UserwalletComponent } from './userwallet/userwallet.component';
import { TokencompComponent } from './tokencomp/tokencomp.component';
import { FundwalletComponent } from './fundwallet/fundwallet.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserregComponent } from './userreg/userreg.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { ResetresponseComponent } from './password/response/resetresponse/resetresponse.component';
import { ResetpasswordComponent } from './password/reset/resetpassword/resetpassword.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TransferComponent } from './transferfolder/transfer/transfer.component';
import { ChoosebankComponent } from './transferfolder/choosebank/choosebank.component';
import { CashloanComponent } from './transferfolder/cashloan/cashloan.component';
import { WithdrawComponent } from './withdrawfolder/withdraw/withdraw.component';
import { NewamountComponent } from './withdrawfolder/newamount/newamount.component';
import { AcctTypeComponent } from './withdrawfolder/acct-type/acct-type.component';
import { CanceloperationComponent } from './withdrawfolder/canceloperation/canceloperation.component';
import { ReceiptComponent } from './withdrawfolder/receipt/receipt.component';
import { ProcessComponent } from './withdrawfolder/process/process.component';
import { AdminLoginComponent } from './adminfolder/admin-login/admin-login.component';
import { AdminRegisterComponent } from './adminfolder/admin-register/admin-register.component';
import { RequestComponent } from './adminfolder/request/request.component';
import { TermsconditionsComponent } from './adminfolder/termsconditions/termsconditions.component';
import { CategoryComponent } from './adminfolder/category/category.component';
import { AddloanComponent } from './adminfolder/addloan/addloan.component';
import { AllcategoriesComponent } from './adminfolder/allcategories/allcategories.component';
import { GetloanComponent } from './loanfolder/getloan/getloan.component';
import { BillpaymentComponent } from './loanfolder/billpayment/billpayment.component';
import { AirtimeComponent } from './airtimefolder/airtime/airtime.component';
import { NetworksComponent } from './airtimefolder/networks/networks.component';
import { MtnComponent } from './airtimefolder/mtn/mtn.component';
import { VtusComponent } from './airtimefolder/vtus/vtus.component';
import { AirtimehistroyComponent } from './airtimefolder/airtimehistroy/airtimehistroy.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  // Admin Router
  {path: 'admin_signup', component: AdminRegisterComponent},
  {path: 'admin_signin', component: AdminLoginComponent},
  
  {path: 'admin_navigations', component: AdminsidebarComponent, canActivate:[AdminafterlogService], children: [
      {path:'admindashboard', component: AdmindashboardComponent},
      {path:'request', component: RequestComponent},
      {path:'t&c', component: TermsconditionsComponent},
      // categories router
      {path:'category', component: CategoryComponent},
      {path:'allcategories', component: AllcategoriesComponent},
      {path:'addloan', component: AddloanComponent},
   ]
  },

// User router
  {path: 'login', component: UserloginComponent},
  {path: 'register', component: UserregComponent},

  {path: 'sidebar', component: SidebarComponent, canActivate: [AfterLoginService], children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: UserDashboardComponent},
    {path: 'profile', component: UserprofileComponent},
    {path: 'funds', component: FundwalletComponent},
    {path: 'transfer/:id', component: TransferComponent},
    {path: 'choosebank', component: ChoosebankComponent},
    {path: 'otherbanks/:id', component: OtherbanksComponent},
    {path: 'cashloan/:id', component: CashloanComponent},
    {path: 'withdraw', component: WithdrawComponent},
      {path: 'bank', component: BankComponent},
      {path: 'loan/:id', component: LoanComponent},
      {path: 'pin/:id', component: PincompComponent},
      {path: 'amount', component: AmountComponent},
      {path: 'newamount', component: NewamountComponent},
      {path: 'acct_type', component: AcctTypeComponent},
      {path: 'canceloperation', component: CanceloperationComponent},
      {path: 'receipt', component: ReceiptComponent},
      {path: 'processwithdraw', component: ProcessComponent},
    {path: 'atm-request', component: AtmcompComponent},
    {path: 'token', component: TokencompComponent},
    {path: 'user-wallet', component: UserwalletComponent},
    {path: 'notification', component: NotificationsComponent},
    {path: 'atmview/:id', component: AtmviewComponent},
    {path: 'transaction/:id', component: TransactionComponent},

    // userloan router
    {path: 'getloan', component: GetloanComponent},
    {path: 'listofloans', component: ListofloansComponent},
    {path: 'myloan/:category', component: MyloansComponent},
    {path: 'loantransactions', component: LoantransactionsComponent},
    {path: 'billpayment', component: BillpaymentComponent},
    {path: 'airtime', component: AirtimeComponent},
    {path: 'networks', component: NetworksComponent},
    {path: 'vtus/:networks', component: VtusComponent},
    {path: 'airtime_history', component: AirtimehistroyComponent},
    {path: 'mydata_bundle', component: DatabundlesComponent},
    {path: 'mtn', component: MtnComponent},
    {path: 'chats', component: ChatwithusComponent},
    {path: 'contact', component: ContactComponent},

  ]},
  {path: 'request-password-reset', component: ResetpasswordComponent, canActivate: [BeforeLoginService]},
  {path: 'request-password-response', component: ResetresponseComponent, canActivate: [BeforeLoginService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
