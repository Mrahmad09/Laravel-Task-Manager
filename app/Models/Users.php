<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Users extends Model
{
    protected $fillable = ['email', 'password'];

    public function todos(): HasMany
    {
        return $this->hasMany(Todo::class);
    }
}
