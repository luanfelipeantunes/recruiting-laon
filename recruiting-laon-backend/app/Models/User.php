<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use SoftDeletes, Notifiable, HasApiTokens;

    protected $fillable = [
        'name', 'email', 'password', 'is_admin'
    ];

    //Mutador para hash de senha
    public function setPasswordAttribute($value){
        $this->attributes['password'] = Hash::make($value);
    }
}
