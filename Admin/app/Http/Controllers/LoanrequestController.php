<?php

namespace App\Http\Controllers;

use App\Models\Request as ModelsRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;

class LoanrequestController extends Controller
{
    public function index(){
        return ModelsRequest::latest()->get();
    }

    public function loanrequest(Request $request){
        ModelsRequest::create($request->all());
        return $request;
    }

    public function editrequest(Request $request, $id){
        return ModelsRequest::where('randomId', $id)->update(
            [
                'status' => $request->status,
                'updated_at' =>  Carbon::now()
            ]
        );
    }

      public function checkpaypalkey(Request $request, $id){

        // $url = 'https://api.paystack.co/transaction/verify/'.$request->reference;

        // $ch = curl_init();
        // curl_setopt($ch, CURLOPT_URL, $url);
        // curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        // curl_setopt(
        //   $ch, CURLOPT_HTTPHEADER, [
        //     'Authorization: Bearer sk_test_0db91341e570f1c85199ecc1ee08720db0c1b5bc']
        // );
        //send request
        // $requests = curl_exec($ch);
        //close connection
        // curl_close($ch);
        //declare an array that will contain the result 
        // $result = array();
        
        // if ($requests) {
        //   $result = json_decode($requests, true);
        // }
        
        // if (array_key_exists('data', $result) && array_key_exists('status', $result['data']) && ($result['data']['status'] === 'success')) {
                return ModelsRequest::where('request_id', $id)->update(
            [
                'paid_status' => $request->status,
                'updated_at' =>  Carbon::now()
            ]
        );
        // }else{
        //   return "Transaction was unsuccessful";
        // }

    }

    public function editpaidloan(Request $request, $id){
                return 7;
        // return ModelsRequest::where('request_id', $id)->update(
        //     [
        //         'paid_status' => $request->status,
        //         'updated_at' =>  Carbon::now()
        //     ]
        // );
    }


}
