import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center w-full bg-black h-20 px-6 md:px-12 lg:px-24 fixed top-0 z-50">
        <img src="images/logo.png" alt="logo"   className="h-16 w-auto object-contain" />
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-white hover:text-yellow-400"> Home </Link>
          <Link to="/About" className="text-white hover:text-yellow-400"> About </Link>
          <Link to="/Menu" className="text-white hover:text-yellow-400"> Menu </Link>
          <Link to="/Blog" className="text-white hover:text-yellow-400"> Blog </Link>
          <Link to="/Contact" className="text-white hover:text-yellow-400"> Contact </Link>
        </div> 
        <Link to="/Contact" className="hidden md:flex bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-2xl font-semibold" > Contact Us </Link>
        <Link to="/Contact" className="md:hidden text-yellow-400" onClick={() => setIsOpen(!isOpen)} > {isOpen ? <CloseIcon /> : <MenuIcon />} </Link>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black flex flex-col items-center gap-6 py-6 mt-16">
          <Link to="/" className="text-white hover:text-yellow-400">Home</Link>
          <Link to="/About" className="text-white hover:text-yellow-400">About</Link>
          <Link to="/Menu" className="text-white hover:text-yellow-400">Menu</Link>
          <Link to="/Blog" className="text-white hover:text-yellow-400">Blog</Link>
          <Link to="/Contact" className="text-white hover:text-yellow-400">Contact</Link>
          <Link to="/Contact" className="bg-yellow-400 text-black px-6 py-3 rounded-2xl" > Contact Us </Link>
        </div>
      )}
    </div>
  );
}
export default Header;
