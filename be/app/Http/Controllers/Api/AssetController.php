<?php

namespace App\Http\Controllers\Api;

use App\Models\Asset;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AssetController extends Controller
{
    public function index($type){
        //$assets = Asset::all();
        $assets = Asset::where('type', '=', $type)->where('custom_name', '!=', null)->get();
        if($assets->count() > 0) {
            return response()->json([
                    'status' => 200,
                    'data' => $assets
                ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'data' => 'No Records Found'
            ], 404);
        }
    }
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'created' => 'required',
            'name' => 'required',
            'custom_name' => 'required',
            'type' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $asset = Asset::create([
                'actioner_id' => 1000, //temp
                'created' => $request->created,
                'status' => 1,
                'type' => $request->type,
                'name' => $request->name,
                'custom_name' => $request->custom_name,
                'make' => $request->make,
                'model' => $request->model,
                'height_under_hook_num' => "", //temp
                'freestanding_height_num' => "", //temp
                'boom_length_num' => "", //temp
                'lifting_capacity_num' => "", //temp
                'height_under_hook_unit' => "", //temp
                'freestanding_height_unit' => "", //temp
                'boom_length_unit' => "", //temp
                'lifting_capacity_unit' => "", //temp
                'liveboard' => 0, //temp
                'file' => "", //temp
                'maximum_length_num' => $request->max_length,
                'maximum_length_unit' => $request->unit, //temp
                'availability_mode' => 1, //temp
                'visible_request_form' => 1, //temp
                'equipment_type' => $request->equipment_type,
            ]);
            if($asset) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Asset Created Succesfully'
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
        $asset = Asset::find($id);
        if($asset) {
            return response()->json([
                'status' => 200,
                'data' => $asset
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'data' => 'No Records Found'
            ], 404);
        }
    }
    public function search($type, $custom_name) {
        $assets = Asset::where('type', '=', $type)->where('custom_name', 'LIKE', '%'.$custom_name.'%')->get();
        if($assets) {
            return response()->json([
                'status' => 200,
                'data' => $assets
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'data' => 'No Records Found'
            ], 404);
        }
    }
    public function updateName(Request $request, int $id) {
        $validator = Validator::make($request->all(), [
            'custom_name' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $asset = Asset::find($id);
            if($asset) {
                $asset->update([
                    'custom_name' => $request->custom_name,
                ]);
                return response()->json([
                    'status' => 200,
                    'message' => 'Asset Updated Succesfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Such Asset Found'
                ], 404);
            }
        }
    }
    public function updateType(Request $request, int $id) {
        $validator = Validator::make($request->all(), [
            'equipment_type' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $asset = Asset::find($id);
            if($asset) {
                $asset->update([
                    'equipment_type' => $request->equipment_type,
                ]);
                return response()->json([
                    'status' => 200,
                    'message' => 'Asset Updated Succesfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Such Asset Found'
                ], 404);
            }
        }
    }
    public function updateMakeModel(Request $request, int $id) {
        $validator = Validator::make($request->all(), [
            'make' => 'required',
            'model' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $asset = Asset::find($id);
            if($asset) {
                $asset->update([
                    'make' => $request->make,
                    'model' => $request->model,
                ]);
                return response()->json([
                    'status' => 200,
                    'message' => 'Asset Updated Succesfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Such Asset Found'
                ], 404);
            }
        }
    }
    public function updateMaxLengthUnit(Request $request, int $id) {
        $validator = Validator::make($request->all(), [
            'max_length' => 'required',
            'unit' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $asset = Asset::find($id);
            if($asset) {
                $asset->update([
                    'maximum_length_num' => $request->max_length,
                    'maximum_length_unit' => $request->unit,
                ]);
                return response()->json([
                    'status' => 200,
                    'message' => 'Asset Updated Succesfully'
                ], 200);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'No Such Asset Found'
                ], 404);
            }
        }
    }
    public function destroy($id) {
        $asset = Asset::find($id);
        if($asset) {
            $asset->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Asset Deleted Succesfully'
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Such Asset Found'
            ], 404);
        }
    }
}
