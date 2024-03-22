import React from "react";
import { Link, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Tagihan = (props) => {
    console.log(props);
    return (

    <AuthenticatedLayout
                user={props.auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Tagihan
                    </h2>
                }
            >
                <Head title="Tagihan" />
                
        </AuthenticatedLayout>
    );
};

export default Tagihan;
