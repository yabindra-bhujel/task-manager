<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        try {
            // Validate the input data
            $request->validate([
                'email' => 'required|email',
                'password' => 'required|min:8',
            ]);

            $credentials = $request->only('email', 'password');

            // TODO: validate the user's email is confirmed

            if (Auth::attempt($credentials)) {
                return redirect()->route('home');
            }

            return back()->withErrors([
                'email' => 'The provided credentials do not match our records.',
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['error' => 'An unexpected error occurred. Please try again later.'])->withInput();
        }
    }

    public function logout()
    {
        Auth::logout();

        return redirect()->route('login');
    }
}
