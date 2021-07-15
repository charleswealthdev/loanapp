<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Airtime;

class AirtimeController extends Controller
{
    public function addAirtime(Request $request){
        Airtime::create($request->all());
        return $request;
    }

    public function getairtimes(){
        return Airtime::latest()->get();
    }
}
