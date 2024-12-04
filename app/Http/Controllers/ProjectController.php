<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }
    /**
     * Display a listing of the resource. by user
     */
    public function userProjects()
    {
        $currentUser = Auth::user();

        // Fetch projects created by the user or associated through the pivot table
        $projects = Project::where('created_by', $currentUser->id)
            ->orWhereHas('users', function ($query) use ($currentUser) {
                $query->where('user_id', $currentUser->id);
            })
            ->get();

        return view('navigation.sidebar', compact('projects'));
    }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required',
            'description',
            'start_date' => 'required',
            'end_date' => 'required',
        ]);

        $currentUser = Auth::user();

        $project = new Project();
        $project->name = $request->name;
        $project->description = $request->description;
        $project->start_date = $request->start_date;
        $project->end_date = $request->end_date;
        $project->created_by = $currentUser->id;
        
        $project->save();

        return redirect()->route('projects');
    
    }

    /**
     * Display the specified resource.
     */
    public function show($projectId)
    {
        // Fetch the project by ID
        $project = Project::findOrFail($projectId);

        // Return the view with the project
        return view('projects.show', compact('project'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
