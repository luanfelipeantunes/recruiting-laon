<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Content extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "title", "original_title", "year", "duration", "synopsis", "director", "thumbnail", "type_content", "ratings"
    ];

    public function categories(){
        return $this->belongsToMany(Category::class, 'category_content');
    }

    public function seasons(){
        return $this->hasMany(Season::class);
    }

    public function actors(){
        return $this->belongsToMany(Actor::class, 'actor_content');
    }

    public function awards(){
        return $this->belongsToMany(Award::class, 'award_content');
    }
}
