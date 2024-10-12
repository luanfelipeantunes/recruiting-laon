<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Validation\ValidationRules;
use Illuminate\Support\Facades\File;

class ContentsController extends Controller
{

    public function index()
    {

        $typeContent = request()->query('typeContent');
        $limit = request()->query('limit');
        $search = request()->query('search');

        $query = Content::query();
        $query->limit($limit ? $limit : 100);

        if ($typeContent) {
            $query->where('type_content', $typeContent);
        }

        if($search){
            $query->where('title', 'LIKE', '%'.$search.'%');
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
        if($request->has('thumbnail')){
            $thumbnail = $request->thumbnail;
            $thumbnail = str_replace('data:image/png;base64,', '', $thumbnail);
            $thumbnail = str_replace(' ', '+', $thumbnail);
            $imageName = time() . '.' . 'png';
            File::put(public_path('img/contents/') . $imageName, base64_decode($thumbnail));

            //Salva o caminho da imagem no banco
            $data['thumbnail'] = 'img/contents/' . $imageName;
        }

        //Atualizando o conteúdo
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

    //Método para deletar um conteúdo
    public function destroy($id)
    {
        $content = Content::findOrFail($id);
        $content->delete();
        return response()->json(null, 200);
    }
}
