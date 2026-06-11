import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300">
      <div className="w-full px-6 md:px-12 lg:px-24 py-12 grid gap-14 md:grid-cols-2 lg:grid-cols-4"> 
        <div>
          <h2 className="text-3xl font-bold text-yellow-500 mb-4"> Foodie's Hub </h2>
          <p className="text-sm leading-6"> Serving delicious meals made with fresh ingredients. Experience the perfect taste with family and friends. </p>
        </div> 
        <div className="lg:ml-16">
          <h3 className="text-white text-xl font-semibold mb-4"> Quick Links </h3>
          <div className="flex flex-col gap-3">
            <Link to="/" className="hover:text-yellow-500"> Home </Link>
            <Link to="/about" className="hover:text-yellow-500"> About </Link>
            <Link to="/menu" className="hover:text-yellow-500"> Menu </Link>
            <Link to="/blog" className="hover:text-yellow-500"> Blog </Link>
            <Link to="/contact" className="hover:text-yellow-500"> Contact </Link>
          </div>
        </div>
        <div className="lg:ml-12">
          <h3 className="text-white text-xl font-semibold mb-4"> Contact Us </h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-500" />
              <p>123 Main Street, Karachi</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-500" />
              <p>+92 300 1234567</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-500" />
              <p>info@foodieshub.com</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <h3 className="text-white text-xl font-semibold mb-4"> Follow Us </h3>
          <div className="flex gap-4">
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-yellow-500 transition"> <FaFacebookF /> </a>
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-yellow-500 transition" > <FaInstagram /> </a>
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-yellow-500 transition" > <FaTwitter /> </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-sm">
        <span className="text-yellow-400">© 2026 Foodie's Hub.</span> All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;