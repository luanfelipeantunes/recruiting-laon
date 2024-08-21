<?php

namespace App\Http\Controllers;

use App\Models\Actor;
use Illuminate\Http\Request;

class ActorController extends Controller
{
    public function index()
    {
        $actors = Actor::all();

        return response()->json($actors, 200);
    }

    public function store(Request $request)
    {
        $actor = Actor::create($request->all());
        return response()->json($actor, 201);
    }
}
