import React from "react";
import { Link, Head } from "@inertiajs/react";

const Jasa = ({ penawaranJasa, auth }) => {
    console.log(penawaranJasa);
    console.log(auth);
    return (
        <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 relative">
            <header className="p-10 mx-16">
                <nav className="-mx-3 flex flex-1 justify-end">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("Welcome")}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Welcome
                            </Link>
                            <Link
                                href={route("login")}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route("register")}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </header>
            <div className="text-center py-6 text-2xl font-bold">Jasa</div>
            <div className="container mx-auto">
                
            <div className="flex gap-10">
                {penawaranJasa.map((jasa, i) => (
                    <div
                    key={i}
                    className="mb-6 bg-white shadow-md rounded-md p-4"
                    >
                        <h1 className="text-xl font-bold mb-2">
                            {jasa.nama_jasa}
                        </h1>
                        <p className="text-gray-600">{jasa.deskripsi_jasa}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Jasa;
