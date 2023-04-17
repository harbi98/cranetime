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
            'name' => 'required',
            'email' => 'required|email',
            'type' => 'required',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
   
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);    
        } else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'type' => $request->type,
                'password' => bcrypt($request->password),
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
    
                $success['name'] =  $user->name;
                $success['email'] =  $user->email;
                $success['type'] =  $user->type;
                $success['token'] =  $user->createToken('MyApp')->accessToken; 
     
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
