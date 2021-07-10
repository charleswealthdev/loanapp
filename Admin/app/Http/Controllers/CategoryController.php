<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Carbon\Carbon;

class CategoryController extends Controller
{
    public function index(){
        return Category::get();
    }

    public function addcategory(CategoryRequest $request){
        Category::create($request->all());
        return $request;
    }

    public function editcategory(Request $request, $id){
        return Category::where('category_id', $id)->update(
            [
                'category' => $request->category,
                'message' => $request->message,
                'updated_at' =>  Carbon::now()
            ]
        );
    }

    public function deletecategory(Request $request, $id){
        return Category::where('category_id', $id)->delete();
    }

}
