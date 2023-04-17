<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    use HasFactory;

    protected $table = 'assets';

    protected $fillable = [
        'type',
        'custom_name',
        'make',
        'model',
        'max_length',
        'unit',
        'equipment_type',
    ];
}
