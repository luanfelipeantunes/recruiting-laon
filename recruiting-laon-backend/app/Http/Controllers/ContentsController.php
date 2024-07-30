<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Validator;
use Symfony\Polyfill\Intl\Idn\Info;

class ContentsController extends Controller
{
    public function index()
    {
        $contents = Content::all();

        return response()->json($contents, 200);
    }

    public function store(Request $request)
    {
        $rules = [
            "title" => 'required',
            "year" => 'required | min:0 |',
            "duration" => 'required | min:0',
            "thumbnail" => 'image | mimes:jpeg,jpg,png,svg | max: 2048'
            
        ];

        $messages = [
            'required' => 'O campo :attribute é obrigatório',
            'min' => 'O campo :attribute não pode ser menor que :min',
            'image' => "O campo :attribute deve ser uma imagem",
            'mimes' => "O campo :attribute deve ser do tipo :values",
            'max' => "O campo ::attribute não deve ser maior que :max kb"
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()], 422);
        }

        $data = $request->all();

        if($request->hasFile('thumbnail')){
            $image = $request->file('thumbnail');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('img/contents'), $imageName);
            $data['thumbnail'] = 'img/contents/' . $imageName;
        }

        $content = Content::create($data);

        if($request->has('categories')){
            $content->categories()->sync($request->input('categories'));
        }

        return response()->json($content, 201);
    }

    public function show($id)
    {
        $content = Content::findOrFail($id);

        return response()->json($content, 200);
    }

    public function update(Request $request, $id)
    {
        $content = Content::findOrFail($id);
    
        $data = $request->only(['title', 'original_title', 'year', 'duration', 'synopsis', 'cast', 'awards', 'director', 'ratings']);
    
        $content->update($data);
    
        return response()->json($content, 200);
    }
    
    public function destroy($id)
    {
        $content = Content::findOrFail($id);
        $content->delete();
        return response()->json(["Conteúdo deletado"], 200);
    }
}
