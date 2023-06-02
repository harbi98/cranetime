<?php

namespace App\Http\Controllers\Api;

use App\Models\Hours;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HoursController extends Controller
{
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'asset_id' => 'required',
            'date_start' => 'required',
            'date_end' => 'required',
            'day' => 'required',
            'time_start' => 'required',
            'time_end' => 'required',
            'all_day' => 'required',
            'open' => 'required',
            'name' => 'required',
            'custom_id' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $hours = Hours::create([
                'type' => $request->type,
                'asset_id' => $request->asset_id,
                'date_start' => $request->date_start,
                'date_end' => $request->date_end,
                'day' => $request->day,
                'time_start' => $request->time_start,
                'time_end' => $request->time_end,
                'all_day' => $request->all_day,
                'open' => $request->open,
                'name' => $request->name,
                'custom_id' => $request->custom_id,
            ]);
            if($hours) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Asset Hours Created Succesfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'message' => 'Something Went Wrong!'
                ], 500);
            }
        }
    }
    public function addBreaktime(Request $request) {
        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'asset_id' => 'required',
            'date_start' => 'required',
            'date_end' => 'required',
            'time_start' => 'required',
            'time_end' => 'required',
            'all_day' => 'required',
            'name' => 'required',
            'custom_id' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $hours = Hours::create([
                'type' => $request->type,
                'asset_id' => $request->asset_id,
                'date_start' => $request->date_start,
                'date_end' => $request->date_end,
                'time_start' => $request->time_start,
                'time_end' => $request->time_end,
                'all_day' => $request->all_day,
                'open' => 0,
                'name' => $request->name,
                'custom_id' => $request->custom_id,
            ]);
            if($hours) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Asset Hours Created Succesfully'
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
        $hours = Hours::where('type', '=', '1')->where('asset_id', '=', $id)->orderBy('day', 'ASC')->get();
        if($hours) {
            return response()->json([
                'status' => 200,
                'data' => $hours
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'data' => 'No Records Found'
            ], 404);
        }
    }
    public function showBreaktime($id) {
        $hours = Hours::where('type', '=', '2')->where('asset_id', '=', $id)->get();
        if($hours) {
            return response()->json([
                'status' => 200,
                'data' => $hours
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'data' => 'No Records Found'
            ], 404);
        }
    }
    public function getBreaktimeHours($name) {
        $hours = Hours::where('type', '=', '2')->where('name', '=', $name)->get();
        if($hours) {
            return response()->json([
                'status' => 200,
                'data' => $hours
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'data' => 'No Records Found'
            ], 404);
        }
    }
}
