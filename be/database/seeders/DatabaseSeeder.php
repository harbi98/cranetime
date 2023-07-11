<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'actioner_id' => 0,
            'status' => 1,
            'logged_in' => 0,
            'verified' => 1,
            'email' => 'test@example.com',
            'phone' => 3434341,
            'password' => bcrypt('12345678'),
            'image' => "",
            'name_first' => 'Test',
            'name_last' => 'User',
            'admin_access' => 1
        ]);
    }
}
