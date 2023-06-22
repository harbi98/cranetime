<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'assets';

    // protected $fillable = [
    //     'type',
    //     'custom_name',
    //     'make',
    //     'model',
    //     'max_length',
    //     'unit',
    //     'equipment_type',
    // ];
    protected $fillable = [
        'actioner_id',
        'actioner_type',
        'created',
        'status',
        'site_id',
        'type',
        'name',
        'custom_name',
        'make',
        'model',
        'height_under_hook_num',
        'freestanding_height_num',
        'boom_length_num',
        'lifting_capacity_num',
        'height_under_hook_unit',
        'freestanding_height_unit',
        'boom_length_unit',
        'lifting_capacity_unit',
        'liveboard',
        'file',
        'lat',
        'lng',
        'radius',
        'maximum_length_num',
        'maximum_length_unit',
        'availability_mode',
        'visible_request_form',
        'location_x',
        'location_y',
        'diameter',
        'size_width',
        'size_height',
        'equipment_type',
    ];
}
