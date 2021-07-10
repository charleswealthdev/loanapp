<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoanRequest;
use App\Models\Loan;
use Illuminate\Http\Request;

class LoanController extends Controller
{
    public function index(){
        return Loan::latest()->get();
    }

    public function addloan(LoanRequest $request){
        Loan::create($request->all());
        return $request;
    }

    public function editloan(Request $request, $id){
        return Loan::where('loan_id', $id)->update(
            [
                'id' => $request->id,
                'status' => $request->status,
            ]
        );
    }

}
