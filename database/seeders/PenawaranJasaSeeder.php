<?php

namespace Database\Seeders;

use App\Models\PenawaranJasa;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PenawaranJasaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $data = [
            ['nama_jasa' => 'Penerjemahan', 'deskripsi_jasa' => 'Layanan penerjemahan dokumen dan teks dari satu bahasa ke bahasa lain.'],
            ['nama_jasa' => 'Terjemahan Tersumpah', 'deskripsi_jasa' => 'Terjemahan yang dilakukan oleh penerjemah tersumpah dan diakui secara resmi oleh pemerintah.'],
            ['nama_jasa' => 'Copywriting', 'deskripsi_jasa' => 'Penulisan teks iklan atau promosi yang menarik dan persuasif untuk tujuan pemasaran.'],
            ['nama_jasa' => 'Konsultasi Bahasa', 'deskripsi_jasa' => 'Konsultasi dan bimbingan dalam penggunaan bahasa untuk keperluan tertentu.'],
            ['nama_jasa' => 'Dubbing', 'deskripsi_jasa' => 'Proses penerapan suara baru ke dalam video atau film untuk mengganti suara asli.'],
            ['nama_jasa' => 'Pembuatan Subtitle', 'deskripsi_jasa' => 'Penambahan teks terjemahan atau transkripsi ke dalam video atau film.']
        ];

        foreach ($data as $item) {
            PenawaranJasa::create($item);
        }
    }
}
