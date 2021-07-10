<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoantransTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loantrans', function (Blueprint $table) {
            $table->id();
            $table->string('loanamount');
            $table->string('interest');
            $table->string('category');
            $table->string('paybacktime');
            $table->string('email');
            $table->string('lastname');
            $table->string('firstname');
            $table->string('accountno');
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
        Schema::dropIfExists('loantrans');
    }
}
