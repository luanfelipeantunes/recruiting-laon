<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Login;
use Illuminate\Contracts\Validation\Validator as ValidationValidator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Validation\ValidationRules;
use App\Models\Content;

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

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $user = User::create($request->all());

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

        if ($validator->fails()) {
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

        return response()->json(null, 200);
    }

    //Método para favoritar um conteúdo
    public function toggleFavorite(Request $request, $contentId)
    {
        $user = User::findOrFail($request->user()->id);

        $content = Content::findOrFail($contentId);

        //Verifica se o conteúdo já está favoritado pelo usuário
        //Se estiver, remove o favorito, senão, adiciona
        if ($user->favorited()->where('content_id', $contentId)->exists()) {
            $user->favorited()->detach($contentId);
            return response()->json(['favorited' => false], 200);
        } else {
            $user->favorited()->attach($contentId, ['created_at' => now(), 'updated_at' => now()]);
            return response()->json(['favorited' => true], 200);
        }
    }

    public function getUserFavorites(Request $request){
        $user = User::findOrFail($request->user()->id);

        $favorites = $user->favorited;

        return response()->json($favorites, 200);
    }
}
