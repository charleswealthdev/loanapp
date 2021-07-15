<?php

namespace App\Http\Controllers;

use App\Mail\Approvedloan;
use App\Mail\Contact;
use App\Mail\LoanRequest;
use App\Mail\Paidloan;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function loanrequest(Request $request){
        $details = [
            'email' => $request->email,
            'amount' => $request->amount,
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
        ];
        Mail::to($request->email)->send(new LoanRequest($details));
        return $details;
    }

    public function approvedloan(Request $request){
        $details = [
            'email' => $request->email,
            'amount' => $request->amount,
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
        ];
        Mail::to($request->email)->send(new Approvedloan($details));
        return $details;
    }

    public function contactus(Request $request){
        $details = [
            'email' => $request->email,
            'messages' =>$request->messages,
        ];
        Mail::to('chimaeze223@gmail.com')->send(new Contact($details));
        return $details;
    }

    public function paymentmail(Request $request){
        $details = [
            'firstname'=> $request->firstname,
            'lastname'=>$request->lastname,
            'email' => $request->email,
            'amount' => $request->amount
        ];
        Mail::to($request->email)->send(new Paidloan($details));
        return $details;
    }

}
