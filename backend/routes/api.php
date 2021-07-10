<?php

use App\Http\Controllers\AtmController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\NotsHistoryController;
use App\Models\History;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

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

    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('signup', 'App\Http\Controllers\AuthController@signup');

    Route::post('adminlogin', 'App\Http\Controllers\AdminController@adminlogin');
    Route::post('adminsignup', 'App\Http\Controllers\AdminController@adminsignup');
  

    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');

    Route::post('funds', 'App\Http\Controllers\FundsController@funds');
    
    Route::get('getfund', 'App\Http\Controllers\FundsController@getfund');
    
    Route::post('edit/{id}', 'App\Http\Controllers\FundsController@editFund');
    
    Route::post('transaction', 'App\Http\Controllers\TransactionController@store');
    
    Route::post('notifications', 'App\Http\Controllers\NotificationsController@store');
    
    Route::delete('/deletes/{id}', 'App\Http\Controllers\NotificationsController@destroy');
    
    Route::get('allnots', 'App\Http\Controllers\NotificationsController@index');

    
    Route::post('nots_history', 'App\Http\Controllers\HistoryController@store');
    Route::get('get_nots_history', 'App\Http\Controllers\HistoryController@gethistory');

    Route::get('alltransactions', 'App\Http\Controllers\TransactionController@index');
    Route::post('atm-request', [AtmController::class, "atm_request"]);
    Route::get('getatms', [AtmController::class, "index"]);
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::post("send-mail", [MailController::class, "mymail"]);
    Route::post("atm-mail", [MailController::class, "atmMail"]);
    Route::post("fund-mail", [MailController::class, "fundmail"]);

    Route::post("transfermail", [MailController::class, "transfermail"]);
    Route::post("receiptmail", [MailController::class, "receiptmail"]);
    Route::post("withdrawmail", [MailController::class, "withdrawreceipt"]);
});

