<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    /**
     * @OA\Get(
     * path="/api/teams",
     * summary="Get list of teams",
     * tags={"Teams"},
     * @OA\Response(response=200, description="List of teams"),
     * )
     */
    public function index()

    {
        return Team::with('projects', 'members')->get();
    }

    /**
     * @OA\Post(
     * path="/api/teams",
     * summary="Create a new team",
     * tags={"Teams"},
     * @OA\RequestBody(
     * required=true,
     * @OA\JsonContent(
     * @OA\Property(property="name", type="string"),
     * @OA\Property(property="description", type="string"),
     * @OA\Property(property="created_by", type="integer")
     * )
     * ),
     * @OA\Response(response=201, description="Team created"),
     * )
     */
    public function store(Request $request)
    {
        $team = Team::create($request->all());
        return response()->json($team, 201);
    }

    /**
     * @OA\Get(
     * path="/api/teams/{id}",
     * summary="Get team by ID",
     * tags={"Teams"},
     * @OA\Parameter(
     * name="id",
     * in="path",
     * required=true,
     * @OA\Schema(type="integer")
     * ),
     * @OA\Response(response=200, description="Team details"),
     * )
     */
    public function show($id)
    {
        return Team::with('projects', 'members')->findOrFail($id);
    }

    /**
     * @OA\Put(
     * path="/api/teams/{id}",
     * summary="Update a team",
     * tags={"Teams"},
     * @OA\Parameter(
     * name="id",
     * in="path",
     * required=true,
     * @OA\Schema(type="integer")
     * ),
     * @OA\RequestBody(
     * required=true,
     * @OA\JsonContent(
     * @OA\Property(property="name", type="string"),
     * @OA\Property(property="description", type="string"),
     * @OA\Property(property="updated_by", type="integer")
     * )
     * ),
     * @OA\Response(response=200, description="Team updated"),
     * )
     */
    public function update(Request $request, $id)
    {
        $team = Team::findOrFail($id);
        $team->update($request->all());
        return response()->json($team);
    }

    /**
     * @OA\Delete(
     * path="/api/teams/{id}",
     * summary="Delete a team",
     * tags={"Teams"},
     * @OA\Parameter(
     * name="id",
     * in="path",
     * required=true,
     * @OA\Schema(type="integer")
     * ),
     * @OA\Response(response=204, description="Team deleted"),
     * )
     */
    public function destroy($id)
    {
        Team::destroy($id);
        return response()->json(null, 204);
    }
}
