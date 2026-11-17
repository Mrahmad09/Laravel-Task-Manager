<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (Schema::hasColumn('todos', 'email')) {
            Schema::table('todos', function (Blueprint $table) {
                $table->dropUnique('todos_email_unique');
                $table->dropColumn('email');
            });
        }

        if (Schema::hasColumn('todos', 'password')) {
            Schema::table('todos', function (Blueprint $table) {
                $table->dropColumn('password');
            });
        }

        if (Schema::hasColumn('todos', 'remember_token')) {
            Schema::table('todos', function (Blueprint $table) {
                $table->dropColumn('remember_token');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('todos', function (Blueprint $table) {
            $table->string('password');
            $table->string('email')->unique();
            $table->rememberToken();
        });
    }
};
