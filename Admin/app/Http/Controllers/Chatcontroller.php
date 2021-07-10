<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;

class Chatcontroller extends Controller
{
    public function getchats(){
        return Chat::get();
    }

    public function createchat(Request $request){
        Chat::create($request->all());
        return $request;
    }
}
