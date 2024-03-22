<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tagihan extends Model
{
    use HasFactory;
    protected $fillable = [
        'total_tagihan',
        'status_pembayaran'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
