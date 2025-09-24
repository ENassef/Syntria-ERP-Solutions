import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-3 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="font-bold text-xl text-Dark-Blue">Logoipsum</h1>
      </div>

      {/* Menu for large screens */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/service"}>Our Services</NavLink></li>
        <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
        <li><NavLink to={"/blogs"}>Blog</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li className="bg-Peach-Red text-white px-4 py-2 rounded-md">
          <Link to={""}>Get In Touch</Link>
        </li>
      </ul>

      {/* Hamburger for small screens */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 text-center p-4">
            <li><NavLink to={"/about"} onClick={() => setIsOpen(false)}>About</NavLink></li>
            <li><NavLink to={"/service"} onClick={() => setIsOpen(false)}>Our Services</NavLink></li>
            <li><NavLink to={"/portfolio"} onClick={() => setIsOpen(false)}>Portfolio</NavLink></li>
            <li><NavLink to={"/blogs"} onClick={() => setIsOpen(false)}>Blog</NavLink></li>
            <li><NavLink to={"/contact"} onClick={() => setIsOpen(false)}>Contact</NavLink></li>
            <li className="bg-Peach-Red  text-white px-4 py-2 rounded-md text-center">
              <Link to={""} onClick={() => setIsOpen(false)}>Get In Touch</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
