<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title', 
        'description', 
        'due_date', 
        'status', 
        'created_by', 
        'priority',
        'project_id', 
        'assigned_to', 
        'team_id'
    ];

    // Relationship: A task belongs to a project
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    // Relationship: A task can belong to a user (assigned to)
    public function user()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    // Relationship: A task belongs to a team
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
