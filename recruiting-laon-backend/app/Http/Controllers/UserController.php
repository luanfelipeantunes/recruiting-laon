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
use App\Models\Favorite;

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

        $favorite = Favorite::where('user_id', $user->id)
            ->where('content_id', $content->id)
            ->first();

        //Verifica se o conteúdo já está favoritado pelo usuário
        //Se estiver, remove o favorito, senão, adiciona
        if ($favorite) {
            $favorite->delete();
            return response()->json(['favorited' => false], 200);
        } else {
            $favorite = new Favorite();
            $favorite->user_id = $user->id;
            $favorite->content_id = $content->id;
            $favorite->save();
            return response()->json(['favorited' => true], 200);
        }
    }

    //Método para retornar os favoritos de um usuário
    public function getUserFavorites(Request $request)
    {
        $user = User::findOrFail($request->user()->id);

        $favorites = Favorite::where('user_id', $user->id)->get();

        return response()->json($favorites, 200);
    }
}
