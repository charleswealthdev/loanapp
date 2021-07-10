<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoantransRequest;
use App\Models\Loantrans;
use Illuminate\Http\Request;

class LoantransController extends Controller
{
    public function index(){
        return Loantrans::get();
    }

    public function addtoloan(LoantransRequest $request){
        Loantrans::create($request->all());
        return $request;
    }
}
