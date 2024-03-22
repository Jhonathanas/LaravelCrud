import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

const Create = (props) => {
    // State untuk menyimpan nilai input dari form
    const [formData, setFormData] = useState({
        nama_projek: "",
        deskripsi_projek: "",
    });
    console.log(props);
    // Handler untuk mengubah nilai input saat pengguna mengetik
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            Inertia.post("/create", formData);
            alert("");
        } catch (error) {
            if (error.response) {
                // Respons dari server dengan status kode yang tidak sukses
                console.error("Kesalahan respons dari server:", error.response);
                // Tangani kesalahan sesuai kebutuhan Anda
            } else if (error.request) {
                // Permintaan dilakukan tetapi tidak ada respons dari server
                console.error("Tidak ada respons dari server:", error.request);
                // Tangani kesalahan sesuai kebutuhan Anda
            } else {
                // Kesalahan lain yang terjadi
                console.error("Kesalahan lain:", error.message);
                // Tangani kesalahan sesuai kebutuhan Anda
            }
        }
    };

    return (
        <div>
            <AuthenticatedLayout
                user={props.auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Create
                    </h2>
                }
            >
                <Head title="Create" />

                <h2>Create Project</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nama Projek:</label>
                        <input
                            type="text"
                            name="nama_projek"
                            value={formData.nama_projek}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Deskripsi Projek:</label>
                        <textarea
                            name="deskripsi_projek"
                            value={formData.deskripsi_projek}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Pilih Bahasa:</label>
                        <select
                            name="bahasa_id"
                            value={formData.bahasa_id}
                            onChange={handleChange}
                        >
                            <option value="">Pilih Bahasa</option>
                            {props.bahasa.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.nama_bahasa}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Simpan</button>
                </form>
            </AuthenticatedLayout>
        </div>
    );
};

export default Create;
