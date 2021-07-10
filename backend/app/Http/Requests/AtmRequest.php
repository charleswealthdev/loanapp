<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AtmRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
           'firstname' => 'required',
           'lastname' => 'required',
           'email' => 'required|email|unique:atms',
           'phone' => 'required',
           'accountno' => 'required',
           'password' => 'required|confirmed|max:4|min:4',
        ];
    }
}
