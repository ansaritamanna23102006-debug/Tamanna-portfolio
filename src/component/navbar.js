"use client";

import{useState} from "react";
import Link from "next/link";

export default function Navbar(){
    const [menuopen, setMenuopen] = useState(false);
    return (
        <nav className="w-full bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-xl font-semibold text-shadow-gray-800">My APP</Link>
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-shadow-gray-600 hover:text-black">Home</Link>
                        <Link href="/about" className="text-shadow-gray-600 hover:text-black">About</Link>
                        <Link href="/services" className="text-shadow-gray-600 hover:text-black">Services</Link>
                        <Link href="/contact" className="text-shadow-gray-600 hover:text-black">Contact</Link>
                    </div>
                    <button
                    onClick={()=>{setMenuopen(!menuopen)}}
                    className="md:hidden text-shadow-gray-700 focus:outline-none"
                    aria-label="Toggle Menu">-</button>
                </div>
            </div>
            {menuopen && (
                <div className="md:hidden bg-white border-t">
                    <div className="flex flex-col px-4 py-2 space-y-2 text-black">
                        <Link href="/" onClick={()=>setMenuopen (false)}>Home</Link>
                        <Link href="/about" onClick={()=>setMenuopen (false)}>About</Link>
                        <Link href="/services" onClick={()=>setMenuopen (false)}>Services</Link>
                        <Link href="/contact" onClick={()=>setMenuopen (false)}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}