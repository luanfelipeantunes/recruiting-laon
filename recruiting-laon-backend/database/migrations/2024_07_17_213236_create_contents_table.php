<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string("original_title");
            $table->integer("year");
            $table->integer("duration");
            $table->string("synopsis");
            $table->string("director")->nullable();
            $table->float("ratings")->nullable();
            $table->string("thumbnail")->nullable();
            $table->string("type_content");
            $table->softDeletes();
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
        Schema::dropIfExists('contents');
    }
}
