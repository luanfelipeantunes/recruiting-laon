<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Actor extends Model
{
    use HasFactory, SoftDeletes;
    
    protected $fillable = ['name'];

    public function contents()
    {
        return $this->belongsToMany(Content::class, 'actor_content');
    }
}
