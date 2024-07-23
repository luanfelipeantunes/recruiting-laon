<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Season extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['content_id', 'title', 'number'];

    public function contents(){
        return $this->belongsTo(Content::class, 'content_id');
    }

    public function episodes(){
        return $this->hasMany(Episode::class);
    }

    
}
