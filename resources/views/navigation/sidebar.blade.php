    <!-- Sidebar -->
    <nav class="bg-white text-gray-800 w-20 space-y-6 py-7 px-2 absolute md:relative md:block transition-all duration-200 border-l-2 border-gray-300">

        <!-- Sidebar Links -->
        <div class="space-y-2">
            <a href="/" class="flex items-center justify-center text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md {{ Request::is('/') ? 'bg-gray-300' : '' }}">
                <x-carbon-home class="w-6 h-6" />
            </a>
            <a href="/projects" class="flex items-center justify-center text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md {{ Request::is('projects') ? 'bg-gray-300' : '' }}">
                <!-- project -->
                <x-carbon-list-boxes class="w-6 h-6" />
            </a>
            <a href="/teams" class="flex items-center justify-center text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md {{ Request::is('teams') ? 'bg-gray-300' : '' }}">
                <!-- team -->
                <x-carbon-group class="w-6 h-6" />
            </a>
            <a href="/tasks" class="flex items-center justify-center text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md {{ Request::is('tasks') ? 'bg-gray-300' : '' }}">
                <!-- task -->
                <x-carbon-task class="w-6 h-6" />
            </a>
            <a href="/settings" class="flex items-center justify-center text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md {{ Request::is('settings') ? 'bg-gray-300' : '' }}">
                <!-- settings -->
                <x-carbon-settings class="w-6 h-6" />
            </a>
        </div>

        <!-- Logout Button -->
        <!-- TODO:show alwasy in page buttom -->
        <div class="
        absolute bottom-0 left-0 right-0
            md:relative md:static md:mt-4
        ">
            <a href="#" class="flex items-center justify-center text-lg text-gray-600 hover:bg-gray-200 p-2 rounded-md">
                <!-- logout -->
                <x-carbon-logout class="w-6 h-6" />
            </a>
        </div>
    </nav>