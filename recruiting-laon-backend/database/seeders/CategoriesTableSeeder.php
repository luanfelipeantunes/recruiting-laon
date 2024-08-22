<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $categories = [
            'Ação',
            'Animação',
            'Aventura',
            'Comédia',
            'Documentário',
            'Drama',
            'Fantasia',
            'Ficção científica',
            'Musical',
            'Romance',
            'Suspense',
            'Terror',
        ];

        foreach($categories as $category){
            Category::create(['name' => $category]);
        }
    }
}
