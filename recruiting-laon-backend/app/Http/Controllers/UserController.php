<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Login;
use Illuminate\Contracts\Validation\Validator as ValidationValidator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Validation\ValidationRules;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return response()->json($users, 200);
    }

    public function store(Request $request)
    {

        $rules = ValidationRules::userRules();

        $messages = ValidationRules::userMessages();

        $validator = Validator::make($request->all(), $rules, $messages);

        if($validator->fails())
        {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = User::create([
            "email" => $request->email,
            "name" => $request->name,
            "is_admin" => $request->is_admin,
            "password" => Hash::make($request->password)
        ]);

        $login = new AuthController();
        $login->login($request);

        return response()->json($user, 201);
    }


    public function show($id)
    {
        
        $user = User::findOrFail($id);

        return response()->json($user, 200);

    }


    public function update(Request $request, $id)
    {

        $rules = ValidationRules::userUpdateRules();
        $messages = ValidationRules::userMessages();
        
        $validator = Validator::make($request->all(), $rules, $messages);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = User::findOrFail($id);

        $user->update($request->all());

        return response()->json($user, 200);
    }


    public function destroy($id)
    {
        $user = User::findOrFail($id);

        $user->delete();

        return response()->status(200);
    }
}
