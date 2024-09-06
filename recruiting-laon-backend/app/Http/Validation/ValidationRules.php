<?php

namespace App\Http\Validation;

class ValidationRules
{
    //Regras de validação para conteúdos
    public static function contentsRules()
    {
        return [
            "title" => 'required',
            "year" => 'required | min:0 |',
            "duration" => 'required | min:0',
            "thumbnail" => 'required | image | mimes:jpeg,jpg,png,svg | max: 2048',
            "type_content" => 'required | in:MOVIE,SERIE',
            "actors" => 'required | min:0 | exists:actors,id',
            "awards" => 'required | min:0 | exists:awards,id',
            "categories" => 'required | min:0 | exists:categories,id'
        ];
    }

    //Regras de validação para atualização de conteúdos
    public static function contentsUpdateRules()
    {
        return [
            "year" => ' min:0 |',
            "duration" => 'min:0',
            "type_content" => 'in:MOVIE,SERIE',
            "actors" => 'min:0 | exists:actors,id',
            "awards" => 'min:0 | exists:awards,id',
            "categories" => 'min:0 | exists:categories,id'
        ];
    }

    //Mensagens de validação para conteúdos
    public static function contentsMessages()
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'min' => 'O campo :attribute não pode ser menor que :min',
            'image' => "O campo :attribute deve ser uma imagem",
            'mimes' => "O campo :attribute deve ser do tipo :values",
            'max' => "O campo ::attribute não deve ser maior que :max kb",
            'in' => "O campo :attribute deve ser um dos seguintes tipos: :values",
            'exists' => 'O campo :attribute não existe'
        ];
    }

    //Regras de validação para Episódios
    public static function episodeRules()
    {
        return [
            "title" => 'required',
            "number" => 'required | min:0',
            "season_id" => 'required | min:0 |exists:seasons,id'
        ];
    }

    //Regras de validação para atualização de episódios
    public static function episodeUpdateRules()
    {
        return [
            "number" => 'min:0',
            "season_id" => 'min:0 |exists:seasons,id'
        ];
    }

    //Mensagens de validação para episódios
    public static function episodeMessages()
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'min' => 'O campo :attribute não pode ser menor que :min',
            'exists' => 'O campo :attribute não existe'
        ];
    }

    //Regras de validação para Temporadas
    public static function seasonsRules()
    {
        return [
            "title" => 'required',
            "number" => 'required | min:0',
            "content_id" => 'required | min:0 |exists:contents,id'
        ];
    }

    //Regras de validação para atualização de temporadas
    public static function seasonsUpdateRules()
    {
        return [
            "number" => 'min:0',
            "content_id" => 'min:0 |exists:contents,id'
        ];
    }

    //Mensagens de validação para temporadas
    public static function seasonsMessages()
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'min' => 'O campo :attribute não pode ser menor que :min',
            'exists' => 'O campo :attribute não existe'
        ];
    }

    //Regras de validação para usuários
    public static function userRules()
    {
        return [
            "name" => 'required',
            "email" => 'required | email | unique:users,email',
            "password" => 'required | min:6'
        ];
    }

    //Regras de validação para atualização de usuários
    public static function userUpdateRules()
    {
        return [
            "email" => 'email | unique:users,email',
            "password" => 'min:6'
        ];
    }

    //Mensagens de validação para usuários
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
