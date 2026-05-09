import React from "react";

const Navbar = ({ currentPage, setCurrentPage, setSelectedClassmate }) => {
  const navItems = [
    { key: "home", label: "Home" },
    { key: "classmates", label: "Letters" },
    { key: "gallery", label: "Gallery" },
  ];

  const handleNav = (key) => {
    setCurrentPage(key);
    if (key !== "classmates") setSelectedClassmate(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm border-b border-purple-100">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
        <button
          onClick={() => handleNav("home")}
          className="font-extrabold text-purple-700 text-lg bg-transparent border-none cursor-pointer"
        >
          SPJ Pips
        </button>
        <div className="flex gap-1">
          {navItems.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleNav(key)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full border-none cursor-pointer transition duration-200
                ${
                  currentPage === key
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "text-gray-500 hover:text-purple-600 hover:bg-purple-50 bg-transparent"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
