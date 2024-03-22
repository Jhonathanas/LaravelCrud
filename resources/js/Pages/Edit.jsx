import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

const Edit = (props) => {
    const { auth, project, bahasa } = props;
    console.log(props)
    const [formData, setFormData] = useState({
        nama_projek: project.nama_projek,
        deskripsi_projek: project.deskripsi_projek,
        bahasa_id: project.bahasa_id, // Menambahkan bahasa_id dari proyek
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Inertia.put(`/projects/${project.id}`, formData);
            alert("Project updated successfully!");
        } catch (error) {
            console.error("Error updating project:", error);
            // Tangani kesalahan sesuai kebutuhan Anda
        }
    };

    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit
                    </h2>
                }
            >
                <Head title="Edit" />

                <h2>Edit Project</h2>
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
                            {bahasa.map((item) => (
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

export default Edit;
