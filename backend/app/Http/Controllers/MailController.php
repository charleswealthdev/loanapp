<?php

namespace App\Http\Controllers;

use App\Mail\AtmMail;
use App\Mail\Fundmail;
use App\Mail\myTestmail;
use App\Mail\Receiptmail;
use App\Mail\Transfermail;
use App\Mail\WithdrawMail;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function mymail(Request $request){
        $details = [
            'title' => $request->email,
            'body' => $request->token
        ];
        Mail::to($request->email)->send(new MyTestMail($details));

        return $details;
    }

    public function atmMail(Request $request){
        $details = [
            'title' => "Request for ATM",
            'body' => $request->firstname,
        ];
        Mail::to($request->email)->send(new AtmMail($details));

        return $details;
    }

    public function fundmail(Request $request){

        $details = [
            'title' => "Credit alert",
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'accountno' => $request->accountno,
            'amtdeposited' => $request->deposited,
            'total' => $request->total,
        ];
        Mail::to($request->email)->send(new Fundmail($details));

        return $details;
    }
    
    public function transfermail(Request $request){

        $details = [
            'title' => "Debit alert",
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'bankname' => $request->bankname,
            'accountno' => $request->accountno,
            'amtdeposited' => $request->deposited,
            'total' => $request->total,
            'benefirstname' => $request->benefactorname,
            'benesurname' => $request->benesurname,
            'beneacctno' => $request->beneacctno
        ];
        Mail::to($request->email)->send(new Transfermail($details));

        return $details;
    }

        
    public function receiptmail(Request $request){

        $details = [
            'title' => "Credit alert",
            'firstname' => $request->myname,
            'lastname' => $request->surname,
            'accountno' => $request->myaccountno,
            'amtdeposited' => $request->deposited,
            'total' => $request->total,
            'deponame' => $request->firstname,
            'deposurname' => $request->lastname,
            'bankname' => $request->bankname,
        ];
        Mail::to($request->email)->send(new Receiptmail($details));

        return $details;
    }

    public function withdrawreceipt(Request $request){

        $details = [
            'title' => "Debit alert",
            'myname' => $request->myname,
            'accountno' => $request->accountno,
            'withdrawn' => $request->withdrawn,
            // 'total' => $request->total,
        ];
        Mail::to($request->email)->send(new WithdrawMail($details));

        return $details;
    }

}
