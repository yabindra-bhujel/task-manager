<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{

    public function show($id){
        $project = Project::find($id);
        return response()->json([
            'project' => $project,
        ], 200);
    }

    public function list(){
        $projects = Project::all();
        return response()->json([
            'projects' => $projects,
        ], 200);
    }
    
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);


        try{
            $now = new \DateTime();
            $startDate = $now->format('Y-m-d H:i:s');
            $endDate = $now->modify('+1 month')->format('Y-m-d H:i:s');

            $project = new Project();
            $project->name = $request->name;
            $project->description = $request->name;
            $project->start_date = $startDate;
            $project->end_date = $endDate;
            $project->created_by = Auth::id();

            $project->save();

            return response()->json([
                'project' => $project,
                'message' => 'Project created successfully.',
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to create project.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
