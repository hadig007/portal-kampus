<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Mahasiswa;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(100)->create();
        \App\Models\Mahasiswa::factory(100)->create();
    }
}
