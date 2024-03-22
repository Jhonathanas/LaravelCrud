import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const ListProject = (props) => {
    const handleDelete = (projectId) => {
        if (confirm('Are you sure you want to delete this project?')) {
            Inertia.delete(`/projects/${projectId}`);
        }
    };

    // Function to find the name of the language based on its ID
    const findBahasaName = (bahasaId) => {
        const bahasa = props.bahasa.find(lang => lang.id === bahasaId);
        return bahasa ? bahasa.nama_bahasa : 'Unknown';
    };

    return (
        <div className="flex flex-wrap">
            {props.projects.map((project) => (
                <div key={project.id} className="my-5 bg-red-200 w-96 m-10 px-10">
                    <h3>Nama Projek : {project.nama_projek}</h3>
                    <h3>Deskripsi Projek : {project.deskripsi_projek}</h3>
                    <h3>Bahasa Projek : {findBahasaName(project.bahasa_id)}</h3>
                    <InertiaLink href={`/projects/${project.id}/edit`} className="bg-red-300">
                        Edit
                    </InertiaLink>
                    <button onClick={() => handleDelete(project.id)} className="bg-red-300">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ListProject;
