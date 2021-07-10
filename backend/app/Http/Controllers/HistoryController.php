<?php

namespace App\Http\Controllers;

use App\Models\History;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    public function store(Request $request)
    {
        $history = new History();
        $history->id = $request->id;
        $history->name = $request->name;
        $history->save();
        return $history;
    }

    public function gethistory()
    {
      $getall = History::latest()->get();
      return $getall;
    }
}
