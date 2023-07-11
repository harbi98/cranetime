<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            //'created' => 'required',,
            'email' => 'required|email',
            'phone' => 'required',
            'phone_code' => 'required',
            'password' => 'required',
            'c_password' => 'required|same:password',
            //'image' => 'required',
            'name_first' => 'required',
            'name_last' => 'required',
            //'admin_access' => 'required',

        ]);
   
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);    
        } else {
            $user = User::create([
                'status' => 1,
                'logged_in' => 0,
                'verified' => 0,
                'email' => $request->email,
                'phone' => $request->phone,
                'phone_code' => $request->phone_code,
                'password' => bcrypt($request->password),
                'password_reset_hash' => "",
                'password_reset_amount' => 0,
                'image' => "",
                'name_first' => $request->name_first,
                'name_last' => $request->name_last,
                'admin_access' => 1,
            ]);
            if($user) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Registration Succesful!',
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'message' => 'Something Went Wrong!'
                ], 500);
            }
        }
    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
                $user = Auth::user();
    
                $success['name_first'] =  $user->name_first;
                $success['name_last'] =  $user->name_first;
                $success['email'] =  $user->email;
                $success['admin_access'] =  $user->admin_access;
                $success['token'] =  $user->createToken('Cranetime')->accessToken; 
     
                return response()->json([
                    'status' => 200,
                    'message' => 'Login Succesful!',
                    'token' => $success['token'],
                ], 200);
            } 
            else{ 
                return response()->json([
                    'status' => 401,
                    'message' => 'Wrong Password!'
                ], 401);
            } 
        }
    }
    public function logout(){
        $user = Auth::user()->token();
        if($user){
            $user->revoke();
            return response()->json([
                'status' => 200,
                'message' => 'Logout Succesfully!',
            ], 200);
        } else {
            $user->revoke();
            return response()->json([
                'status' => 401,
                'message' => 'Unauthenticated',
            ], 200);
        }
    }
}
