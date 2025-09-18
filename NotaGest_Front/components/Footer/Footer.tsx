import React from 'react';
import Logo from '../../assets/Logo.png';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#0c4a6e] text-white px-6 py-2 font-sans">
          <div className="flex flex-col items-center sm:items-start sm:ml-24">
            <Image
              src={Logo}
              alt="Logo"
              className="mt-8 mb-4 max-w-[150px] h-auto"
            />
            <p className="text-xs text-white text-center sm:text-left max-w-xs">
              Simplifique sua gestão documental, proteja o meio ambiente e organize seu futuro. Juntos, rumo a um amanhã mais sustentável.
            </p>
          </div>
      
          <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-6 mt-12">
            <p className="text-sm">© 2024 Farj-Br. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <FaInstagram className="text-2xl hover:text-[#e1306c] transition-colors" />
              <FaFacebook className="text-2xl hover:text-[#1877f2] transition-colors" />
              <FaTwitter className="text-2xl hover:text-[#1da1f2] transition-colors" />
              <FaLinkedin className="text-2xl hover:text-[#0077b5] transition-colors" />
              <MdEmail className="text-2xl hover:text-[#d44638] transition-colors" />
            </div>
          </div>
        </footer>
      );
}

export default Footer;
