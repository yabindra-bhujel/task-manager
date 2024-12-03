<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Register</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 text-gray-800 flex items-center justify-center min-h-screen py-6 px-4">

    <div class="relative w-full max-w-sm">
        <!-- Main Heading -->
        <h1 class="text-3xl font-semibold text-center mb-4">Welcome Back</h1>

        <!-- Forms Container -->
        <div class="relative w-full transition-transform duration-500">
            <!-- Login Form -->
            <form id="loginForm" method="post" action="{{ route('login') }}" class="space-y-4">
                @csrf
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email"
                        class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name="password" id="password"
                        class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required>
                </div>

                <button type="submit"
                    class="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Login
                </button>
            </form>

        </div>

        <!-- Toggle Buttons -->
        <div class="mt-4 text-center">
            <a href="/register" class="text-sm text-blue-500 hover:underline">Don't have an account? Register here</a>
        </div>

        <!-- Alternative Login with Google -->
        <div class="mt-8 text-center">
            <p class="text-sm">Or</p>
            <button class="mt-2 w-full px-4 py-2 bg-white text-black rounded-md flex items-center justify-center gap-4 border border-gray-500" aria-label="Login with Google">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" class="w-6 h-6">
                <span>Login with Google</span>
            </button>
        </div>
    </div>

</body>

</html>