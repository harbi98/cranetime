<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HoursCustomDates extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'hours_custom_dates';

    protected $fillable = [
        'site_id',
        'actioner_id',
        'name',
        'date_start',
        'date_to',
        'asset_id'
    ];
}
