<?php

use App\Http\Controllers\PenawaranJasaController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TagihanController;
use App\Models\PenawaranJasa;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Welcome');

Route::get('/Jasa', [PenawaranJasaController::class, 'index'])->name('Jasa');

Route::middleware('auth')->group(function () {
    //dashboard klien
    Route::get('/dashboard', [ProjectController::class, 'show'])->name('dashboard');

    //create projek
    Route::get('/create', [ProjectController::class, 'index'])->name('klein.create.index');
    Route::post('/create', [ProjectController::class, 'create'])->name('klein.create');
    Route::get('/projects/{project}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
    Route::put('/projects/{project}', [ProjectController::class, 'update'])->name('projects.update');
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy'])->name('projects.destroy');

    //edit profil
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //tagihan user
    Route::get('/tagihan', [TagihanController::class, 'index'])->name('Tagihan');

});


require __DIR__.'/auth.php';
