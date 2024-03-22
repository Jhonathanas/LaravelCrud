<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_projek', 'deskripsi_projek', 'status', 'user_id', 'bahasa_id' , 
    ];

    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function Bahasa()
    {
        return $this->belongsTo(Bahasa::class);
    }
}
