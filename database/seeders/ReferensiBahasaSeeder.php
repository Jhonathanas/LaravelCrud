<?php

namespace Database\Seeders;

use App\Models\Bahasa;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ReferensiBahasaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['kode_bahasa' => 'en', 'nama_bahasa' => 'English'],
            ['kode_bahasa' => 'fr', 'nama_bahasa' => 'French'],
            ['kode_bahasa' => 'es', 'nama_bahasa' => 'Spanish'],
            ['kode_bahasa' => 'de', 'nama_bahasa' => 'German'],
            ['kode_bahasa' => 'it', 'nama_bahasa' => 'Italian'],
            ['kode_bahasa' => 'nl', 'nama_bahasa' => 'Dutch'],
            ['kode_bahasa' => 'pt', 'nama_bahasa' => 'Portuguese'],
            ['kode_bahasa' => 'ja', 'nama_bahasa' => 'Japanese'],
            ['kode_bahasa' => 'ko', 'nama_bahasa' => 'Korean'],
        ];
    
        foreach ($data as $item) {
            Bahasa::create($item);
        }
    }
}
