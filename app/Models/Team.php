<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = ['name', 'description', 'created_by', 'updated_by'];

    // Relationship: A team has many projects
    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    // Relationship: A team belongs to many users (members)
    public function members()
    {
        return $this->belongsToMany(User::class, 'team_user', 'team_id', 'user_id');
    }
}
