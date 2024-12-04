<!-- Sidebar -->
<nav class="bg-white text-gray-800 w-30 space-y-6 py-7 px-2 absolute md:relative md:block transition-all duration-200 border-l-2 border-gray-300">

    <!-- Sidebar Links -->
    <div class="space-y-2">
        <a href="/" class="flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md {{ Request::is('/') ? 'bg-gray-300' : '' }}">
            <x-carbon-home class="w-6 h-6" />
            <span class="ml-3 hidden md:block">Home</span> <!-- Text on the right of the icon -->
        </a>
        <a href="/projects" class="flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md {{ Request::is('projects') ? 'bg-gray-300' : '' }}">
            <x-carbon-list-boxes class="w-6 h-6" />
            <span class="ml-3 hidden md:block">Projects</span> <!-- Text on the right of the icon -->
        </a>

        <!-- Dynamically list user projects -->
        @foreach($projects as $project)
        <a href="{{ route('projects.show', $project->id) }}" class="flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md">
            <x-carbon-list-boxes class="w-6 h-6" />
            <span class="ml-3 hidden md:block">{{ $project->name }}</span> <!-- Project name on the right -->
        </a>
        @endforeach

        <a href="/teams" class="flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md {{ Request::is('teams') ? 'bg-gray-300' : '' }}">
            <x-carbon-group class="w-6 h-6" />
            <span class="ml-3 hidden md:block">Teams</span> <!-- Text on the right of the icon -->
        </a>
        <a href="/tasks" class="flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md {{ Request::is('tasks') ? 'bg-gray-300' : '' }}">
            <x-carbon-task class="w-6 h-6" />
            <span class="ml-3 hidden md:block">Tasks</span> <!-- Text on the right of the icon -->
        </a>
        <a href="/settings" class="flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md {{ Request::is('settings') ? 'bg-gray-300' : '' }}">
            <x-carbon-settings class="w-6 h-6" />
            <span class="ml-3 hidden md:block">Settings</span> <!-- Text on the right of the icon -->
        </a>
    </div>

    <!-- Logout Button -->
    <div class="absolute bottom-0 left-0 right-0 md:relative md:static md:mt-4">
        <a href="#" class="flex items-center justify-start text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md">
            <x-carbon-logout class="w-6 h-6" />
            <span class="ml-3 hidden md:block">Logout</span> <!-- Text on the right of the icon -->
        </a>
    </div>
</nav>