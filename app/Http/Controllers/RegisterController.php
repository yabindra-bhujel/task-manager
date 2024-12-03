<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller
{
    public function showRegisterForm()
    {
        return view('auth.register');
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
        ]);

        $email = $request->email;
        $name = explode('@', $email)[0];

        try{
            User::create([
                'email' => $email,
                'password' => bcrypt($request->password),
                'name' => $name,
            ]);
            return redirect()->route('login')->with('success', 'Registration successful! Please log in.');

        } catch (\Exception $e) {
            Log::error('User registration failed: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => 'Failed to register. Please try again later.'])->withInput();
        }
    }

    // TODO: Implement email confirmation in new user creation
    private function sendConfirmationEmail($email)
    {
        
    }
}
