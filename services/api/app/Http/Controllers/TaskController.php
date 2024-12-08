<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function create(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'project_id' => 'required|exists:projects,id',
        ]);

        $project = Project::find($request->project_id);



        try{
            $task = new Task();
            $task->name = $request->name;
            $task->description = $request->description;
            $task->start_date = $request->start_date;
            $task->end_date = $request->end_date;
            $task->project_id = $project->id;
            $task->created_by = Auth::id();

            $task->save();

            return response()->json([
                'task' => $task,
                'message' => 'Task created successfully.',
            ], 201);

        }catch(\Exception $e){
            return response()->json([
                'message' => 'Failed to create task.',
                'error' => $e->getMessage(),
            ], 500);
        }
       
    }
}
