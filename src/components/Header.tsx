import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-6 font-bold flex justify-between items-center">
      <Link to="/" className="text-white no-underline hover:text-gray-300">
        Blog
      </Link>
      <Link to="/contact" className="text-white no-underline hover:text-gray-300">
        お問い合わせ
      </Link>
    </header>
  );
};