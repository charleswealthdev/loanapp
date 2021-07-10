<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loantrans extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'id',
        'amount',
        'interest',
        'category',
        'paybacktime',
        'email',
        'lastname',
        'firstname',
        'accountno',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'updated_at'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
