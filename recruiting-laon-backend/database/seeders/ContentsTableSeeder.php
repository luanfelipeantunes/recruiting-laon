<?php

namespace Database\Seeders;

use App\Models\Content;
use Illuminate\Database\Seeder;

class ContentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $contents = [
            [
                "title" => "The Shawshank Redemption",
                "original_title" => "The Shawshank Redemption",
                "year" => 1994,
                "duration" => 142,
                "synopsis" => "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                "director" => "Frank Darabont",
                "ratings" => 9.3,
                "thumbnail" => "img/contents/image1.jpeg",
                "type_content" => "MOVIE",
                "categories" => [1, 4],
                "actors" => [1, 2],
                "awards" => [1, 4]
            ],
            [
                "title" => "Inception",
                "original_title" => "Inception",
                "year" => 2010,
                "duration" => 148,
                "synopsis" => "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                "director" => "Christopher Nolan",
                "ratings" => 8.8,
                "thumbnail" => "img/contents/image2.jpg",
                "type_content" => "MOVIE",
                "categories" => [2, 5],
                "actors" => [3, 4],
                "awards" => [2, 5]
            ],
            [
                "title" => "The Godfather",
                "original_title" => "Il Padrino",
                "year" => 1972,
                "duration" => 175,
                "synopsis" => "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                "director" => "Francis Ford Coppola",
                "ratings" => 9.2,
                "thumbnail" => "img/contents/image3.jpg",
                "type_content" => "MOVIE",
                "categories" => [1, 6],
                "actors" => [5, 6],
                "awards" => [1, 6]
            ],
            [
                "title" => "The Dark Knight",
                "original_title" => "The Dark Knight",
                "year" => 2008,
                "duration" => 152,
                "synopsis" => "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
                "director" => "Christopher Nolan",
                "ratings" => 9.0,
                "thumbnail" => "img/contents/image4.jpeg",
                "type_content" => "MOVIE",
                "categories" => [7, 8],
                "actors" => [6, 5],
                "awards" => [4, 6]
            ],
            [
                "title" => "Pulp Fiction",
                "original_title" => "Pulp Fiction",
                "year" => 1994,
                "duration" => 154,
                "synopsis" => "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                "director" => "Quentin Tarantino",
                "ratings" => 8.9,
                "thumbnail" => "img/contents/image5.jpeg",
                "type_content" => "MOVIE",
                "categories" => [3, 9],
                "actors" => [2, 1],
                "awards" => [3, 1]
            ],
            [
                "title" => "Schindler's List",
                "original_title" => "Schindler's List",
                "year" => 1993,
                "duration" => 195,
                "synopsis" => "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
                "director" => "Steven Spielberg",
                "ratings" => 9.0,
                "thumbnail" => "img/contents/image6.jpg",
                "type_content" => "MOVIE",
                "categories" => [1, 10],
                "actors" => [4, 2],
                "awards" => [4, 1]
            ],
            [
                "title" => "Fight Club",
                "original_title" => "Fight Club",
                "year" => 1999,
                "duration" => 139,
                "synopsis" => "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more.",
                "director" => "David Fincher",
                "ratings" => 8.8,
                "thumbnail" => "img/contents/image7.jpg",
                "type_content" => "MOVIE",
                "categories" => [11, 12],
                "actors" => [3, 1],
                "awards" => [4, 5]
            ],
            [
                "title" => "Forrest Gump",
                "original_title" => "Forrest Gump",
                "year" => 1994,
                "duration" => 142,
                "synopsis" => "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
                "director" => "Robert Zemeckis",
                "ratings" => 8.8,
                "thumbnail" => "img/contents/image8.jpeg",
                "type_content" => "MOVIE",
                "categories" => [1, 2],
                "actors" => [4, 3],
                "awards" => [1, 2]
            ],
            [
                "title" => "Breaking Bad",
                "original_title" => "Breaking Bad",
                "year" => 2008,
                "duration" => 49,
                "synopsis" => "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's future.",
                "director" => "Vince Gilligan",
                "ratings" => 9.5,
                "thumbnail" => "img/contents/serie1.jpeg",
                "type_content" => "SERIE",
                "categories" => [1, 3],
                "actors" => [1, 2],
                "awards" => [1, 2]
            ],
            [
                "title" => "Game of Thrones",
                "original_title" => "Game of Thrones",
                "year" => 2011,
                "duration" => 57,
                "synopsis" => "Noble families vie for control of the Iron Throne as an ancient enemy returns after being dormant for millennia.",
                "director" => "David Benioff, D.B. Weiss",
                "ratings" => 9.3,
                "thumbnail" => "img/contents/serie2.jpg",
                "type_content" => "SERIE",
                "categories" => [4, 5],
                "actors" => [3, 4],
                "awards" => [3, 4]
            ],
            [
                "title" => "Stranger Things",
                "original_title" => "Stranger Things",
                "year" => 2016,
                "duration" => 51,
                "synopsis" => "A group of kids in a small town uncover a government conspiracy and otherworldly mysteries after their friend goes missing.",
                "director" => "The Duffer Brothers",
                "ratings" => 8.7,
                "thumbnail" => "img/contents/serie3.jpeg",
                "type_content" => "SERIE",
                "categories" => [6, 7],
                "actors" => [5, 6],
                "awards" => [5, 6]
            ],
            [
                "title" => "The Crown",
                "original_title" => "The Crown",
                "year" => 2016,
                "duration" => 58,
                "synopsis" => "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
                "director" => "Peter Morgan",
                "ratings" => 8.6,
                "thumbnail" => "img/contents/serie4.jpg",
                "type_content" => "SERIE",
                "categories" => [8, 9],
                "actors" => [4, 2],
                "awards" => [4, 2]
            ],
            [
                "title" => "The Mandalorian",
                "original_title" => "The Mandalorian",
                "year" => 2019,
                "duration" => 35,
                "synopsis" => "A lone bounty hunter in the outer reaches of the galaxy protects a mysterious child from those seeking to exploit it.",
                "director" => "Jon Favreau",
                "ratings" => 8.7,
                "thumbnail" => "img/contents/serie5.jpeg",
                "type_content" => "SERIE",
                "categories" => [10, 11],
                "actors" => [5, 6],
                "awards" => [5, 6]
            ],
            [
                "title" => "The Office",
                "original_title" => "The Office",
                "year" => 2005,
                "duration" => 22,
                "synopsis" => "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
                "director" => "Greg Daniels",
                "ratings" => 8.9,
                "thumbnail" => "img/contents/serie6.jpg",
                "type_content" => "SERIE",
                "categories" => [3, 4],
                "actors" => [3, 4],
                "awards" => [3, 4]
            ],
            [
                "title" => "The Witcher",
                "original_title" => "The Witcher",
                "year" => 2019,
                "duration" => 60,
                "synopsis" => "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
                "director" => "Lauren Schmidt Hissrich",
                "ratings" => 8.2,
                "thumbnail" => "img/contents/serie7.jpeg",
                "type_content" => "SERIE",
                "categories" => [1, 2],
                "actors" => [1, 2],
                "awards" => [1, 2]
            ],
            [
                "title" => "Chernobyl",
                "original_title" => "Chernobyl",
                "year" => 2019,
                "duration" => 60,
                "synopsis" => "In April 1986, an explosion at the Chernobyl nuclear power plant in the Soviet Union becomes one of the world's worst man-made catastrophes.",
                "director" => "Craig Mazin",
                "ratings" => 9.4,
                "thumbnail" => "img/contents/serie8.jpeg",
                "type_content" => "SERIE",
                "categories" => [12, 11],
                "actors" => [5, 6],
                "awards" => [5, 6]
            ]
        ];


        // Insere o conteúdo
        foreach ($contents as $contentData) {
            $content = Content::create([
                'title' => $contentData['title'],
                'original_title' => $contentData['original_title'],
                'year' => $contentData['year'],
                'duration' => $contentData['duration'],
                'synopsis' => $contentData['synopsis'],
                'director' => $contentData['director'],
                'ratings' => $contentData['ratings'],
                'thumbnail' => $contentData['thumbnail'],
                'type_content' => $contentData['type_content']
            ]);

            // Associa categorias, atores e prêmios ao conteúdo
            $content->categories()->sync($contentData['categories']);
            $content->actors()->sync($contentData['actors']);
            $content->awards()->sync($contentData['awards']);
        };
    }
}
