import React from "react";
import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa6";

const SocialButtonsTop = () => {
   return (
      <div className="flex text-lg md:text-xl lg:text-2xl gap-2 text-gray-400">
         <FaFacebookF />
         <FaInstagram />
         <FaTelegram />
      </div>
   );
};

export default SocialButtonsTop;
