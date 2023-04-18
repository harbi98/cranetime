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
        $assets = Asset::where('type', '=', $type)->get();
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
            'custom_name' => 'required',
            //'make' => 'required',
            //'model' => 'required',
            'type' => 'required',
            //'equipment_type' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $asset = Asset::create([
                'type' => $request->type,
                'custom_name' => $request->custom_name,
                'make' => $request->make,
                'model' => $request->model,
                'max_length' => $request->max_length,
                'unit' => $request->unit,
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
