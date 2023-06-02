<?php

namespace App\Http\Controllers\Api;

use App\Models\HoursCustomDates;
use App\Models\Hours;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HoursCustomDatesController extends Controller
{
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'date_start' => 'required',
            'date_to' => 'required',
            'asset_id' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $hours_custom_dates = HoursCustomDates::create([
                'name' => $request->name,
                'date_start' => $request->date_start,
                'date_to' => $request->date_to,
                'asset_id' => $request->asset_id,
            ]);
            if($hours_custom_dates) {
                $hours_custom_dates_id = HoursCustomDates::orderBy('id', 'DESC')->first();
                return response()->json([
                    'status' => 200,
                    'message' => 'Asset Custom Availability Created Succesfully',
                    'id' => $hours_custom_dates_id->id
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'message' => 'Something Went Wrong!'
                ], 500);
            }
        }
    }
    public function show($id) {
        $hours_custom_dates = HoursCustomDates::where('asset_id', '=', $id)->get();
        if($hours_custom_dates) {
            return response()->json([
                'status' => 200,
                'data' => $hours_custom_dates
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'data' => 'No Records Found'
            ], 404);
        }
    }
}
