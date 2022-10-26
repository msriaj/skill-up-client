import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-gray-100 dark:bg-[#0C1223] dark:text-gray-100 ">
      <div className="pt-5 pb-2">
        <div className="uppercase text-center dark:text-gray-50">
          Social media
        </div>
        <div className="flex justify-center space-x-3  text-xl">
          <a
            href="http://fb.me/cloudnumber404"
            title="Facebook"
            className="flex items-center p-1"
          >
            <FaFacebook />
          </a>
          <a
            href="http://fb.ne/mail_sohel"
            title="Twitter"
            className="flex items-center p-1"
          >
            <FaTwitter />
          </a>
          <a
            href="http://fb.me/cloudnumber404"
            title="Instagram"
            className="flex items-center p-1"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 2022 SkillUp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
