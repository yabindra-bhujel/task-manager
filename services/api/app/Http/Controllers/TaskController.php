<?php

namespace App\Http\Controllers;

use App\Enum\TaskStatus;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * @Route("/tasks/update_status/{id}", methods={"PUT"})
     * @param Request $request
     * @param string $id
     * @return JsonResponse
     */
    public function updateStatus(Request $request, string $id)
    {
        $task = Task::find($id);

        if($task === null){
            return response()->json([
                'message' => 'Task not found.',
            ], 404);
        }

        try{
            if($task->status === TaskStatus::PENDING->toString()){
                $task->status = TaskStatus::IN_PROGRESS->toString();
            }
            else if($task->status === TaskStatus::IN_PROGRESS->toString()){
                $task->status = TaskStatus::COMPLETED->toString();
            }
            $task->save();
            return response()->json([
                'task' => $task,
                'message' => 'Task status updated successfully.',
            ], 200);

        } catch(\Exception $e){
            return response()->json([
                'message' => 'Failed to update task status.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * @Route("/tasks/list", methods={"GET"})
     * @param string $id
     * @return JsonResponse
     */
    public function list(Request $request)
    {
        $currentUser = Auth::user();
        $tasks = Task::where('created_by', $currentUser->id)->get();

        // TODO: add advanced filtering
        return response()->json([
            'tasks' => $tasks,
        ], 200);
    }


    /**
     * @Route("/tasks/create", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'due_date' => 'required|date',
            'project_id',
            'priority' => 'required|in:low,medium,high',
            'status' => 'required|in:pending,in_progress,completed,stopped',
        ]);

        $project = Project::find($request->project_id);



        try{
            $task = new Task();
            $task->title = $request->title;
            $task->description = $request->description;
            $task->due_date = $request->due_date;

            if($request->project_id !== null) {
                $task->project_id = $project->id;
            }
            
            $task->priority = $request->priority;
            $task->status = $request->status;
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
