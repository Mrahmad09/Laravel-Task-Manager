<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TodoFlowTest extends TestCase
{
    use RefreshDatabase;

    public function test_authenticated_user_can_view_and_create_todos(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->get('/todos')
            ->assertOk();

        $this->post('/createTodo', [
            'task' => 'Buy milk',
        ])->assertRedirect('/todos');

        $this->assertDatabaseHas('todos', [
            'task' => 'Buy milk',
            'user_id' => $user->id,
        ]);
    }

    public function test_authenticated_user_can_log_out(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->post('/logout')
            ->assertRedirect('/login');

        $this->assertGuest();
    }
}
