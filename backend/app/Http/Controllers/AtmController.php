<?php

namespace App\Http\Controllers;

use App\Http\Requests\AtmRequest;
use App\Models\Atm;
// use Illuminate\Http\Request;

class AtmController extends Controller
{
   public function index()
   {
      $atm = Atm::get();
      return $atm;
   }

    public function atm_request(AtmRequest $request)
    {
        $atm = new Atm();
        $atm->id = $request->id;
        $atm->firstname = $request->firstname;
        $atm->lastname = $request->lastname;
        $atm->phone = $request->phone;
        $atm->email = $request->email;
        $atm->cvc = $request->cvc;
        $atm->card_no = $request->card_no;
        $atm->atm_type = $request->atm_type;
        $atm->accountno = $request->accountno;
        $atm->password = $request->password;
        $atm->save();
        return $atm;
    }
}
