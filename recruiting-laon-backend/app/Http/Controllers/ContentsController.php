<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Validator;
use Symfony\Polyfill\Intl\Idn\Info;
use App\Http\Validation\ValidationRules;

class ContentsController extends Controller
{

    public function index()
    {

        $typeContent = request()->query('typeContent');
        $limit = request()->query('limit');
        $query = Content::query();
        $query->limit($limit ? $limit : 10);

        if ($typeContent) {
            $query->where('type_content', $typeContent);
        }

        $contents = $query->with(['categories', 'actors', 'awards'])->get();
        return response()->json($contents, 200);
    }

    public function store(Request $request)
    {
        $rules = ValidationRules::contentsRules();

        $messages = ValidationRules::contentsMessages();

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $data = $request->all();

        //Armazenando a imagem
        $image = $request->file('thumbnail');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('img/contents'), $imageName);
        $data['thumbnail'] = 'img/contents/' . $imageName;

        $content = Content::create($data);

        //Adicionando as categorias
        $content->categories()->sync($request->input('categories'));
        //Adicionando os atores
        $content->actors()->sync($request->input('actors'));
        //Adicionando os prêmios
        $content->awards()->sync($request->input('awards'));


        return response()->json($content, 201);
    }

    public function show($id)
    {
        $content = Content::findOrFail($id)->load(['categories', 'actors', 'awards']);

        return response()->json($content, 200);
    }

    public function update(Request $request, $id)
    {

        $rules = ValidationRules::contentsUpdateRules();

        $messages = ValidationRules::contentsMessages();

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $content = Content::findOrFail($id);

        $data = $request->all();

        //Armazenando a imagem
        if($request->hasFile('thumbnail')){
            $image = $request->file('thumbnail');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('img/contents'), $imageName);
            $data['thumbnail'] = 'img/contents/' . $imageName;
        }

        $content->update($data);

        //Adicionando as categorias
        if($request->has('categories')){
            $content->categories()->sync($request->input('categories'));
        }

        //Adicionando os atores
        if($request->has('actors')){
            $content->actors()->sync($request->input('actors'));
        }

        //Adicionando os prêmios
        if($request->has('awards')){
            $content->awards()->sync($request->input('awards'));
        }

        return response()->json($content, 200);
    }

    public function destroy($id)
    {
        $content = Content::findOrFail($id);
        $content->delete();
        return response()->status(200);
    }
}
