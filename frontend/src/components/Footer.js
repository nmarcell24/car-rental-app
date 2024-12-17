import { Facebook, Instagram, MailOutline, PhoneOutlined, YouTube } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0D1E3A] text-gray-400 py-8 px-24 ">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700 pb-6">
          {/* Logo and Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4">RENTCARS</h2>
            <p className="text-sm">25566 Hc 1, Glenallen, <br /> Alaska, 99588, USA</p>
            <p className="text-sm mt-2"><PhoneOutlined /> +603 4784 273 12</p>
            <p className="text-sm mt-2"><MailOutline /> rentcars@gmail.com</p>
          </div>

          {/* Links: Our Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Product</h3>
            <ul className="space-y-2 text-sm">
              <li>Career</li>
              <li>Car</li>
              <li>Packages</li>
              <li>Features</li>
              <li>Priceline</li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Download</li>
              <li>Help Centre</li>
              <li>Guides</li>
              <li>Partner Network</li>
              <li>Cruises</li>
              <li>Developer</li>
            </ul>
          </div>

          {/* Links: About Rentcars */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Rentcars</h3>
            <ul className="space-y-2 text-sm">
              <li>Why choose us</li>
              <li>Our Story</li>
              <li>Investor Relations</li>
              <li>Press Center</li>
              <li>Advertise</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <YouTube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-sm text-gray-400">
          Copyright © 2023 · Rentcars, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
