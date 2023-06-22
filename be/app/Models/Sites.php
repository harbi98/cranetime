<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sites extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'sites';

    protected $fillable = [
        'actioner_id',
        'actioner_type',
        'status',
        'name',
        'address',
        'date_start',
        'date_end',
        'footplate',
        'floors',
        'structure',
        'exterior',
        'lat',
        'lng',
        'street',
        'suburb',
        'state',
        'postal_code',
        'country_code',
        'phone_code',
        'timezone',
        'liveboard_type',
        'contractor_id',
        'operator_extensions',
        'realtime_data',
        'predictive_durations',
        'breakout',
        'opening_times',
        'disable_double_booking',
        'co2_logging',
        'operator_request_button',
        'disable_48hr_booking_value',
        'gates',
        'notes_required',
        'disable_48hr_booking',
        'jobs',
        'trucks',
        'lifts',
        'tag_cranetime',
    ];
}
