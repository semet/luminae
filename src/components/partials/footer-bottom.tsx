import {
   FaCcMastercard,
   FaCcPaypal,
   FaCcVisa,
   FaFacebook,
   FaFacebookF,
   FaInstagram,
   FaTelegram,
} from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { PiTelegramLogoLight } from "react-icons/pi";

const FooterBottom = () => {
   return (
      <div className="main-padding flex flex-col py-6">
         <div className="flex justify-center md:justify-between">
            <div className="flex gap-2 text-4xl">
               <FaCcVisa />
               <FaCcMastercard />
               <FaCcPaypal />
            </div>
            <div className="hidden md:flex">
               <select className="select select-bordered text-[.8rem] select-sm w-full max-w-xs !border-none !outline-none">
                  <option value="">English</option>
                  <option>France</option>
               </select>
            </div>
         </div>
         <div className="divider -mt-0.5 hidden md:block"></div>
         <div className="hidden md:flex justify-between items-center">
            <p className="text-sm text-gray-600">
               165-179 Forster Road City of Monash, Melbourne, Australia
            </p>
            <p className="text-sm text-gray-600">
               ©2023 Copyright in reserved for lumine shop
            </p>
            <div className="flex gap-5 text-lg text-gray-700">
               <FaInstagram />
               <FiFacebook />
               <PiTelegramLogoLight />
            </div>
         </div>
      </div>
   );
};
export default FooterBottom;
