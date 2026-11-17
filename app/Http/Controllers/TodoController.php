<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TodoController extends Controller
{
    public function showTodos(Request $request): Response
    {
        $todos = $request->user()->todos()->get(['id', 'task', 'user_id']);

        return Inertia::render('Todos', [
            'todos' => $todos,
        ]);
    }

    public function createTodos(Request $request): RedirectResponse
    {
        $validated = $request->validate(['task' => 'required|string|max:255']);
        $request->user()->todos()->create(['task' => $validated['task']]);

        return redirect('/todos');
    }

    public function clearTodos(Request $request): RedirectResponse
    {
        $request->user()->todos()->delete();

        return redirect('/todos');
    }

    public function deleteTask(Request $request, int $id): RedirectResponse
    {
        $request->user()->todos()->findOrFail($id)->delete();

        return redirect('/todos');
    }
}
