<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        return response()->json(Todo::all());
    }
    public function show($id)
    {
        $todo = Todo::findOrFail($id);
        return response()->json($todo);
    }

    public function store(Request $request)
    {
        $todo = Todo::create($request->only(['title', 'image']));
        return response()->json($todo, 201);
    }

    public function update(Request $request, $id)
    {
        $todo = Todo::findOrFail($id);
        $todo->update($request->only(['title', 'image']));
        return response()->json($todo);
    }

    public function destroy($id)
    {
        Todo::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
    
}


