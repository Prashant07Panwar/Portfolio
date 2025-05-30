import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-b border-neutral-900 bg-neutral-950 text-neutral-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-center">Contact Information</h2>
          <p className="text-center">Noida, Uttar Pradesh, India</p>
          <p className="text-center">Phone: +91 7983905066</p>
        </div>
        <div className="flex space-x-6">
          <a href="mailto:prashantpanwar0903@gmail.com" title="Email" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <HiOutlineMail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/prashant-panwar-688006320/" title="LinkedIn" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Prashant07Panwar" title="GitHub" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/_prashant_.09_/?hl=en" title="Instagram" className="hover:text-cyan-300" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="\Prashant's Resume.pdf" title="Download Resume" download className="hover:text-cyan-300">
            <BsFillPersonLinesFill size={24} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Prashant Panwar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
