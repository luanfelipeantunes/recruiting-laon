<?php

namespace Database\Seeders;

use App\Models\Actor;
use Illuminate\Database\Seeder;

class ActorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $actors = [
            'Tom Cruise',
            'Brad Pitt',
            'Angelina Jolie',
            'Jennifer Aniston',
            'Johnny Depp',
            'Leonardo DiCaprio',
        ];

        foreach($actors as $actor){
            Actor::create(['name' => $actor]);
        }
    }
}
