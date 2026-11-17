<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/', [TodoController::class, 'showTodos']);
    Route::get('/todos', [TodoController::class, 'showTodos']);
    Route::post('/createTodo', [TodoController::class, 'createTodos']);
    Route::delete('/clearTodos', [TodoController::class, 'clearTodos'])->name('todos.clear');
    Route::post('/delete/{id}', [TodoController::class, 'deleteTask']);
    Route::post('/logout', [RegisteredUserController::class, 'logUserOut']);
});

Route::middleware('guest')->group(function () {
    Route::get('/register', [RegisteredUserController::class, 'createUserAcc']);
    Route::post('/register', [RegisteredUserController::class, 'storeUserAcc']);
    Route::get('/login', [RegisteredUserController::class, 'logUser']);
    Route::post('/login', [RegisteredUserController::class, 'logUserIn']);
});
