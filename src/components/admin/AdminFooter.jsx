"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const AdminFooter = () => {
  return (
    <div className=" bg-gray-50 rounded dark:bg-gray-600 w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright href="#" by="HEEHAteam" year={2024} />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon href="#" icon={BsGithub} />
        <Footer.Icon href="#" icon={BsDribbble} />
      </div>
    </div>
  );
};

export default AdminFooter;
