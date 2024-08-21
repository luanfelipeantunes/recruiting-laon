<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Season;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Validation\ValidationRules;

class SeasonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contents = Season::all();
        return response()->json($contents, 200);
    }

    public function store(Request $request)
    {
        $rules = ValidationRules::seasonsRules();

        $messages = ValidationRules::seasonsMessages();
   
        $validator = Validator::make($request->all(), $rules, $messages);
        
        if($validator->fails())
        {
            return response()->json(['error' => $validator->errors()], 422);
        }

        //Verificando se o content_id é uma serie
        $content = Content::findOrFail($request->content_id);
        if($content->type_content == 'MOVIE')
        {
            return response()->json(['error' => 'O conteúdo deve ser uma série'], 422);
        }
        
        //Verificando se já existe uma temporada com esse número para esse conteúdo
        $existingSeason = Season::where('content_id', $request->content_id)->where('number', $request->number)->first();

        if($existingSeason)
        {
            return response()->json(['error' => 'Já existe uma temporada com esse número para esse conteúdo'], 409);
        }

        $content = Season::create($request->all());

        return response()->json($content, 201);
    }

    public function show($id)
    {
        $content = Season::findOrFail($id);

        if($content){
            return response()->json($content, 200);
        }else{
            return response()->json(['error' => 'Conteúdo não encontrado'], 404);
        }
    }


    public function update(Request $request, $id)
    {
        $rules = ValidationRules::seasonsRules(); 
        $messages = ValidationRules::seasonsMessages();
   
        $validator = Validator::make($request->all(), $rules, $messages);
        
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()], 422);
        }

        $season = Season::findOrFail($id);

        //Verificando se já existe uma temporada com esse número para esse conteúdo
        $existingSeason = Season::where('content_id', $season->content_id)->where('number', $request->number)->first();

        if($existingSeason){
            return response()->json(['error' => 'Já existe uma temporada com esse número para esse conteúdo'], 409);
        }

        if($season){
            $season->update($request->all());
            return response()->json($season, 200);
        }else{
            return response()->json(['error' => 'Conteúdo não encontrado'], 404);
        }
    }

    public function destroy($id)
    {
        $content = Season::findOrFail($id);

        if($content){
            $content->delete();
            return response()->json(['message' => 'Conteúdo deletado com sucesso'], 200);
        }else{
            return response()->json(['error' => 'Conteúdo não encontrado'], 404);
        }
    }
}
