<?php

namespace App\Http\Controllers;

use App\Models\Bahasa;
use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function index(Project $project ,Bahasa $bahasa){
        $projects = Project::where('user_id', Auth::id())->get(); // Fetch projects for the authenticated user
        $bahasa = Bahasa::all();
        return Inertia::render('Create')->with(['projects' => $projects, 'bahasa' => $bahasa]);
    }

    public function create(Request $request)
{
    // Validate the incoming request data
    $validatedData = $request->validate([
        'nama_projek' => 'required|string',
        'deskripsi_projek' => 'required|string',
        'bahasa_id' => 'required|exists:bahasas,id', 
    ]);

    // Create a new project instance
    $project = new Project();
    
    $project->nama_projek = $validatedData['nama_projek'];
    $project->deskripsi_projek = $validatedData['deskripsi_projek'];
    $project->bahasa_id = $validatedData['bahasa_id']; 

    // Set the user ID
    $project->user_id = Auth::id(); // Access the user ID using the Auth facade
    $project->save();

    // Return a response indicating successful creation
    return redirect()->route('dashboard');
}

    public function show(Project $project, Bahasa $bahasa){
        $projects = Project::where('user_id', Auth::id())->get();
        $bahasa = Bahasa::all();
        return Inertia::render('Dashboard', ['projects' => $projects, 'bahasa' => $bahasa]); // Pass projects to the view
    }

    public function edit(Project $project,Bahasa $bahasa)
    {
        // Pastikan hanya pemilik proyek yang bisa mengedit
        if ($project->user_id !== Auth::id()) {
            abort(403); // Tampilkan error 403 jika bukan pemilik proyek
        }
        $bahasa = Bahasa::all();
        return Inertia::render('Edit', [
            'project' => $project , 'bahasa' => $bahasa 
        ]); 
    }

    public function update(Request $request, Project $project)
    {
        // Pastikan hanya pemilik proyek yang bisa mengedit
        if ($project->user_id !== Auth::id()) {
            abort(403); // Tampilkan error 403 jika bukan pemilik proyek
        }

        // Validasi data yang dikirimkan oleh form
        $validatedData = $request->validate([
            'nama_projek' => 'required|string',
            'deskripsi_projek' => 'required|string',
        ]);

        // Update data proyek
        $project->update($validatedData);

        return Inertia::location(route('dashboard'));
    }

    public function destroy(Project $project)
    {
        Log::info('Attempting to delete project:', ['project_id' => $project->id, 'user_id' => Auth::id()]);

    // Ensure only the owner of the project can delete it
    if ($project->user_id !== Auth::id()) {
        abort(403); // Unauthorized
    }

    // Delete the project
    $project->delete();

    // Redirect to the dashboard or any other route after deletion
    return Inertia::location(route('dashboard'));
    }
}
