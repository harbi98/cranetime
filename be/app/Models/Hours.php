<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hours extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'hours';

    protected $fillable = [
        'actioner_id',
        'actioner_type',
        'site_id',
        'type',
        'asset_id',
        'date_start',
        'date_end',
        'day',
        'time_start',
        'time_end',
        'all_day',
        'open',
        'name',
        'custom_id'
    ];
}
