<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Validation\ValidationRules;

class EpisodeController extends Controller
{
    public function index()
    {
        $episodes = Episode::all();
        return response()->json($episodes, 200);
    }


    public function store(Request $request)
    {
        $rules = ValidationRules::episodeRules();

        $messages = ValidationRules::episodeMessages();
   
        $validator = Validator::make($request->all(), $rules, $messages);
        
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()], 422);
        }
        
        //Verificando se já existe um episódio com esse número para essa temporada
        $existingEpisode = Episode::where('season_id', $request->season_id)->where('number', $request->number)->first();

        if($existingEpisode){
            return response()->json(['error' => 'Já existe um episódio com esse número para essa temporada'], 409);
        }

        $episode = Episode::create($request->all());

        return response()->json($episode, 201);
    }


    public function show($id)
    {
        $episode = Episode::findOrFail($id);

        if($episode){
            return response()->json($episode, 200);
        }else{
            return response()->json(['error' => 'Episódio não encontrado'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $rules = ValidationRules::episodeUpdateRules();

        $messages = ValidationRules::episodeMessages();
   
        $validator = Validator::make($request->all(), $rules, $messages);
        
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()], 422);
        }
        
        //Verificando se já existe um episódio com esse número para essa temporada
        $existingEpisode = Episode::where('season_id', $request->season_id)->where('number', $request->number)->first();

        if($existingEpisode){
            return response()->json(['error' => 'Já existe um episódio com esse número para essa temporada'], 409);
        }

        $episode = Episode::findOrFail($id);

        $episode->update($request->all());
        return response()->json($episode, 200);
    }

    public function destroy($id)
    {
        $episode = Episode::findOrFail($id);
        $episode->delete();
        return response()->json(['message' => 'Episódio deletado com sucesso'], 200);
    }
}
