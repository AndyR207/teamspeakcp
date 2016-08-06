<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function Index(Request $req)
    {
        return view('fe.index');
    }

    public function Login(Request $req)
    {
    	return view('fe.login', ['title' => 'Log In']);
    }
}
