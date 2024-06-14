// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 ">
      <div className="container mx-auto text-center">
        <p>© 2024 Dr. Peter. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.facebook.com/DanielYoung"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com/PeterNnajiofor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/PeterNnajiofor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
