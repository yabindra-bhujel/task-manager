<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Task Management')</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="flex flex-col h-screen">

    <!-- Topbar -->
    @include('navigation.topbar')

    <div class="flex flex-1">

        <!-- Sidebar -->
        <div class="w-16 text-white">
            @include('navigation.sidebar')
        </div>

        <!-- Main Content -->
        <div class="flex-1 p-6">
            <!-- Page Content -->
            @yield('content')
        </div>
    </div>

</body>

</html>