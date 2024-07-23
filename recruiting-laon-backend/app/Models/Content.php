<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Content extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        "title", "original_title", "year", "duration", "synopsis", "cast", "awards", "director"
    ];

    protected $casts = [
        'cast' => 'array',
        'awards' => 'array',
        'ratings' => 'float'
    ];

    public function categories(){
        return $this->belongsToMany(Category::class, 'category_content');
    }

    public function seasons(){
        return $this->hasMany(Season::class);
    }
}
