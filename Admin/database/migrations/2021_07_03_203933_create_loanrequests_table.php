<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoanrequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loanrequests', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('amount');
            $table->string('email');
            $table->string('firstname');
            $table->string('surname');
            $table->string('phone');
            $table->string('accoutno');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('loanrequests');
    }
}
