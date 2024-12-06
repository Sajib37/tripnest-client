"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoIosCreate } from "react-icons/io";
import { MdBrowserUpdated } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
    const [open, setOpen] = useState(window.innerWidth >= 1024);
    const handleOpen = () => {
        if (window.innerWidth < 1024) {
            setOpen(!open);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="">
            <button
                onClick={handleOpen}
                className="text-3xl text-black fixed top-2 left-2 z-50"
            >
                {open ? (
                    <RxCross2 className="text-white md:hidden" />
                ) : (
                    <RiMenu2Fill />
                )}
            </button>
            <div className="w-72 h-screen bg-foreground hidden lg:block"></div>

            <aside
                onClick={handleOpen}
                className={`w-72 fixed top-0 z-20 left-0  bg-background border-r-4  border-[#222831] text-[#333333] pt-4 h-screen transition-transform duration-700 ease-in-out ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
                style={{ overflowY: "auto" }}
            >
                <div className=" flex flex-col mb-6 items-center  mt-4 ">
                    <h1 className="text-3xl font-bold font-Lato text-secondary">
                        Tripnest
                    </h1>
                </div>

                <section className="flex flex-col gap-4  text-white">
                    <Link href="/create-event">
                        <div className="flex ml-12 gap-2 w-56 mx-auto ">
                            <span className="text-xl">
                                <IoIosCreate />
                            </span>
                            <h1 className=" font-semibold text-sm text-center  uppercase">
                                Create Event
                            </h1>
                        </div>
                    </Link>
                    <Link href="/update-event">
                        <div className="flex ml-12 gap-2 w-56 mx-auto ">
                            <span className="text-xl">
                                <MdBrowserUpdated />
                            </span>
                            <h1 className=" font-semibold text-sm  uppercase">
                                Update Event
                            </h1>
                        </div>
                    </Link>
                    <Link href="/create-event">
                        <div className="flex ml-12 gap-2 w-56 mx-auto ">
                            <span className="text-xl">
                                <FaUsers />
                            </span>
                            <h1 className=" font-semibold text-sm  uppercase">
                                All Users
                            </h1>
                        </div>
                    </Link>
                </section>

                <hr className="my-8 border-[#929191]" />

                <section className="flex flex-col gap-4 text-white">
                    <Link href="/">
                        <div className="flex ml-12 gap-2 w-56 mx-auto ">
                            <span className="text-xl">
                                <FaHome />
                            </span>
                            <h1 className=" font-semibold text-sm text-center  uppercase">
                                Home
                            </h1>
                        </div>
                    </Link>
                    <Link href="/all-event">
                        <div className="flex ml-12 gap-2 w-56 mx-auto ">
                            <span className="text-xl">
                                <MdOutlineEventAvailable />
                            </span>
                            <h1 className=" font-semibold text-sm text-center  uppercase">
                                All Event
                            </h1>
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className="flex ml-12 gap-2 w-56 mx-auto ">
                            <span className="text-xl">
                                <IoMdContact />
                            </span>
                            <h1 className=" font-semibold text-sm text-center  uppercase">
                                Contact
                            </h1>
                        </div>
                    </Link>
                    <Link href="/update-profile">
                        <div className="flex ml-12 gap-2 w-56 mx-auto ">
                            <span className="text-xl">
                                <GrDocumentUpdate />
                            </span>
                            <h1 className=" font-semibold text-sm text-center  uppercase">
                                Update Profile
                            </h1>
                        </div>
                    </Link>
                    <Link href="/my-profile">
                        <div className="flex ml-12 gap-2 w-56 mx-auto ">
                            <span className="text-xl">
                                <CgProfile />
                            </span>
                            <h1 className="font-semibold text-sm text-center  uppercase">
                                My Profile
                            </h1>
                        </div>
                    </Link>
                </section>
            </aside>
        </section>
    );
};

export default Sidebar;
