<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'description', 'start_date', 'end_date', 'status', 'created_by', 'updated_by', 'team_id'];

    // Relationship: A project belongs to a team
    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    // Relationship: A project has many tasks
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    // Relationship: A project belongs to many users
    public function users()
    {
        return $this->belongsToMany(User::class, 'project_user', 'project_id', 'user_id');
    }
}
