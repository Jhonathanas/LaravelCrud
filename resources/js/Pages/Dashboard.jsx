import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, InertiaLink } from "@inertiajs/inertia-react";
import ListProject from "@/Layouts/ListProject";
import { useEffect } from "react";

const Dashboard = (props) => {
    
    useEffect(() => {
        // Fetch data from the backend when the component mounts
        // You can fetch projects data here or wherever needed
    }, []);

    console.log(props);
    return (
        <>
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex justify-between">
                    <div className="p-6 text-gray-900">
                     You're logged in!
                     </div>
                    <InertiaLink href="/create" className="bg-red-300 p-5">
                         Create
                    </InertiaLink>
                     </div>
                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex justify-between mt-4">
                         <div className="p-6 text-gray-900">
                             <h1>project {props.auth.user.name}</h1>
                             <ListProject projects={props.projects} bahasa={props.bahasa}/>
                         </div>
                     </div>
                 </div>
             </div>
        </AuthenticatedLayout>
        
        </>
    );
}

export default Dashboard;
