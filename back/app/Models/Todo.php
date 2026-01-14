<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @method static \Illuminate\Database\Eloquent\Builder latest()
 *  */

class Todo extends Model
{
    protected $fillable = ["title", "image"];
}
