<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Register</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 text-gray-800 flex items-center justify-center min-h-screen py-6 px-4">
    <div class="relative w-full max-w-sm">
        <h1 class="text-3xl font-semibold text-center mb-4">
            Create an Account
        </h1>
        <div class="relative w-full transition-transform duration-500">
            <form id="registerForm" method="post" action="{{ route('register') }}" class="space-y-4">
                @csrf
                <div>
                    <label for="regEmail" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="regEmail"
                        class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required>
                </div>

                <div>
                    <label for="regPassword" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name="password" id="regPassword"
                        class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required>
                </div>

                <button type="submit"
                    class="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Register
                </button>
            </form>

            <!-- Success Message -->
            @if ($message = Session::get('success'))
            <div id="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
                <strong class="font-bold">Success!</strong>
                <span class="block sm:inline">{{ $message }}</span>
            </div>
            <script>
                // Wait for 3 seconds and then redirect
                setTimeout(function() {
                    window.location.href = "{{ route('login') }}"; // Redirect to login page after 3 seconds
                }, 5000);
            </script>
            @endif

            @if ($errors->has('error'))
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
                {{ $errors->first('error') }}
            </div>
            @endif


            <!-- Link to login page -->
            <div class="flex justify-center mt-4">
                <a href="/login" class="text-sm text-blue-500 hover:underline">If you already have an account</a>
            </div>

        </div>
    </div>
</body>

</html>