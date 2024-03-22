<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\PenawaranJasa;
use Illuminate\Support\Facades\Route;
use Illuminate\Contracts\Foundation\Application;

class PenawaranJasaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $penawaranJasa = PenawaranJasa::all();

        return Inertia::render('Jasa', [
            'penawaranJasa' => $penawaranJasa,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PenawaranJasa $penawaranJasa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PenawaranJasa $penawaranJasa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PenawaranJasa $penawaranJasa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PenawaranJasa $penawaranJasa)
    {
        //
    }
}
