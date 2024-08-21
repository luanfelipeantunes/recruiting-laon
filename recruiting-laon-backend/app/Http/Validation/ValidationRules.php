<?php

namespace App\Http\Validation;

class ValidationRules
{
    public static function contentsRules()
    {
        return [
            "title" => 'required',
            "year" => 'required | min:0 |',
            "duration" => 'required | min:0',
            "thumbnail" => 'required | image | mimes:jpeg,jpg,png,svg | max: 2048',
            "type_content" => 'required | in:MOVIE,SERIE',
        ];
    }

    public static function contentsMessages()
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'min' => 'O campo :attribute não pode ser menor que :min',
            'image' => "O campo :attribute deve ser uma imagem",
            'mimes' => "O campo :attribute deve ser do tipo :values",
            'max' => "O campo ::attribute não deve ser maior que :max kb",
            'in' => "O campo :attribute deve ser um dos seguintes tipos: :values"
        ];
    }

    public static function episodeRules()
    {
        return [
            "title" => 'required',
            "number" => 'required | min:0',
            "season_id" => 'required | min:0 |exists:seasons,id'
        ];
    }

    public static function episodeMessages()
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'min' => 'O campo :attribute não pode ser menor que :min',
            'exists' => 'O campo :attribute não existe'
        ];
    }

    public static function seasonsRules()
    {
        return [
            "title" => 'required',
            "number" => 'required | min:0',
            "content_id" => 'required | min:0 |exists:contents,id'
        ];
    }

    public static function seasonsMessages()
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'min' => 'O campo :attribute não pode ser menor que :min',
            'exists' => 'O campo :attribute não existe'
        ];
    }

    public static function userRules()
    {
        return [
            "name" => 'required',
            "email" => 'required | email | unique:users,email',
            "password" => 'required | min:6'
        ];
    }

    public static function userMessages()
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'email' => 'O campo :attribute deve ser um email válido',
            'unique' => 'O campo :attribute já está em uso',
            'min' => 'O campo :attribute não pode ser menor que :min'
        ];
    }



}