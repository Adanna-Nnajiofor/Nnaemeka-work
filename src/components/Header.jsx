import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeMenuOnScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener("scroll", closeMenuOnScroll);
    return () => {
      window.removeEventListener("scroll", closeMenuOnScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-blue-600 fixed w-full z-10 text-white py-6 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" onClick={handleNavLinkClick}>
            Dr. Peter's Practice
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-xl items-center">
            <li>
              <Link
                to="/"
                className="hover:text-black"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-black"
                onClick={handleNavLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-black"
                onClick={handleNavLinkClick}
              >
                Services
              </Link>
            </li>
            <li className="relative group" ref={dropdownRef}>
              <button
                className="hover:text-black hover:bg-blue-400 px-6 py-2 text-center cursor-pointer border-solid border-2 border-white rounded-md"
                onClick={toggleDropdown}
              >
                View More
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-blue-500 p-6 space-y-4 text-white rounded-lg mt-2 z-20">
                  <li>
                    <Link
                      to="/resources"
                      className="hover:text-black"
                      onClick={handleNavLinkClick}
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/testimonials"
                      className="hover:text-black"
                      onClick={handleNavLinkClick}
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio"
                      className="hover:text-black"
                      onClick={handleNavLinkClick}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="hover:text-black"
                      onClick={handleNavLinkClick}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="hover:text-black"
                      onClick={handleNavLinkClick}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/appointment"
                className="hover:text-black"
                onClick={handleNavLinkClick}
              >
                Appointment
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu (Hidden by default, shown on mobile screens) */}
        <div className="block md:hidden">
          <button className="text-white hover:text-black" onClick={toggleMenu}>
            {isOpen ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Mobile Menu Links */}
        {isOpen && (
          <div
            className="md:hidden fixed inset-0 top-20 bg-blue-500 text-white p-4 shadow-md overflow-y-auto"
            ref={menuRef}
          >
            <ul className="flex flex-col space-y-4 divide-y divide-slate-200">
              <li className="py-2 text-lg">
                <Link
                  to="/"
                  className="hover:text-black"
                  onClick={handleNavLinkClick}
                >
                  Home
                </Link>
              </li>
              <li className="py-2 text-lg">
                <Link
                  to="/about"
                  className="hover:text-black"
                  onClick={handleNavLinkClick}
                >
                  About
                </Link>
              </li>
              <li className="py-2 text-lg">
                <Link
                  to="/services"
                  className="hover:text-black"
                  onClick={handleNavLinkClick}
                >
                  Services
                </Link>
              </li>
              <li className="py-2 text-lg">
                <Link
                  to="/resources"
                  className="hover:text-black"
                  onClick={handleNavLinkClick}
                >
                  Resources
                </Link>
              </li>
              <li className="py-2 text-lg">
                <Link
                  to="/testimonials"
                  className="hover:text-black"
                  onClick={handleNavLinkClick}
                >
                  Testimonials
                </Link>
              </li>
              <li className="py-2 text-lg">
                <Link
                  to="/portfolio"
                  className="hover:text-black"
                  onClick={handleNavLinkClick}
                >
                  Portfolio
                </Link>
              </li>
              <li className="py-2 text-lg">
                <Link
                  to="/appointment"
                  className="hover:text-black"
                  onClick={handleNavLinkClick}
                >
                  Appointment
                </Link>
              </li>
              <li className="py-2 text-lg">
                <Link
                  to="/blog"
                  className="hover:text-black"
                  onClick={handleNavLinkClick}
                >
                  Blog
                </Link>
              </li>
              <li className="py-2 text-lg">
                <Link
                  to="/contact"
                  className="hover:text-black"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
