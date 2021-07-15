<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Chatcontroller;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\LoanrequestController;
use App\Http\Controllers\LoantransController;
use App\Http\Controllers\MailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([

    'middleware' => 'api',

], function ($router) {

    // Everything about logging in and signing up
    Route::post('adminlogin', 'App\Http\Controllers\AuthController@login');
    Route::post('adminsignup', 'App\Http\Controllers\AuthController@signup');
    Route::get('alladmin', 'App\Http\Controllers\AuthController@index');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    // For loan category
    Route::post('category', [CategoryController::class, "addcategory"]);
    Route::get('getcategories', [CategoryController::class, "index"]);
    // edit router
    Route::post('edit/{id}', [CategoryController::class, "editcategory"]);
    // delete router
    Route::delete('/delete/{id}', [CategoryController::class, "deletecategory"]);

    // for adding of loan
    Route::post('createloan', [LoanController::class, "addloan"]);
    Route::get('getloan', [LoanController::class, "index"]);
    Route::post('editloan/{id}', [LoanController::class, "editloan"]);

    // for loan request from users
    Route::post('requestloan', [LoanrequestController::class, "loanrequest"]);
    Route::get('allrequest', [LoanrequestController::class, "index"]);
    Route::post('editrequest/{id}', [LoanrequestController::class, "editrequest"]);

    // for loan mails
    Route::post('loanrequestmail', [MailController::class, "loanrequest"]);
    Route::post('approvedloan', [MailController::class, "approvedloan"]);
    Route::post('appreview', [MailController::class, "contactus"]);
    Route::post('loanpayment', [MailController::class, "paymentmail"]);

    // for loan transactions
    Route::post('posttransactions', [LoantransController::class, "addtoloan"]);
    Route::post('payloan/{id}', [LoanrequestController::class, "checkpaypalkey"]);
    // Route::post('editpaidloan/{id}', [LoanrequestController::class, "editpaidloan"]);
    Route::get('getrequests', [LoantransController::class, "index"]);

    // Routes for chat:
    Route::post('postchat', [Chatcontroller::class, "createchat"]);
    Route::get('getchats', [Chatcontroller::class, "getchats"]);

});