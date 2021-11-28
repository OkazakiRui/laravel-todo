<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    protected $fillable = [
        "title", "is_done"
    ];

    // is_done の値が 0 になっていた
    // booleanに変更したい！
    // カラムの型を指定したい時は $casts 
    protected $casts = [
        "is_done" => "bool",
    ];
}
