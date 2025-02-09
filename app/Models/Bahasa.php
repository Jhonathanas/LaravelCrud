<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bahasa extends Model
{
    use HasFactory;
    protected $fillable = [
        'kode_bahasa',
        'nama_bahasa'
    ];
}
