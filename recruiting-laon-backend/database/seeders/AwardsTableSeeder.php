<?php

namespace Database\Seeders;

use App\Models\Award;
use Illuminate\Database\Seeder;

class AwardsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Array de prêmios
        $awards = [
            'Melhor ator',
            'Melhor atriz',
            'Melhor diretor',
            'Melhor filme',
            'Melhor roteiro',
            'Melhor trilha sonora',
        ];

        //Criando os prêmios
        foreach ($awards as $award){
            Award::create(['name' => $award]);
        }
    }
}
