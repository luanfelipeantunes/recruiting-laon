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
        $query = Content::query();

        if($typeContent){
            $query->where('type_content', $typeContent);
        }

        $contents = $query->get();

        return response()->json($contents, 200);
    }

    public function store(Request $request)
    {
        $rules = ValidationRules::contentsRules();

        $messages = ValidationRules::contentsMessages();

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

        $rules = ValidationRules::contentsRules();

        $messages = ValidationRules::contentsMessages();

        $validator = Validator::make($request->all(), $rules, $messages);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()], 422);
        }

        $content = Content::findOrFail($id);
    
        $data = $request->all();
        
        if($request->hasFile('thumbnail')){
            $image = $request->file('thumbnail');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('img/contents'), $imageName);
            $data['thumbnail'] = 'img/contents/' . $imageName;
        }
    
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
