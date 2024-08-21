<?php

namespace App\Http\Controllers;

use App\Models\Award;
use Illuminate\Http\Request;

class AwardController extends Controller
{
    public function index()
    {
        $awards = Award::all();

        return response()->json($awards, 200);
    }

    public function store(Request $request)
    {
        $award = Award::create($request->all());

        return response()->json($award, 201);
    }
}
