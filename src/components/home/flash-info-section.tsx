import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FlashInfoSection = () => {
   return (
      <div className="main-padding bg-[#F7DDD0] hidden md:block">
         <div className="flex justify-between gap-4 relative overflow-hidden">
            <button className="absolute top-1/2 left-0 text-gray-500 text-xl">
               <FaChevronLeft />
            </button>
            <div className="flex flex-col gap-4 ml-28 max-w-xs md:max-w-md py-16">
               <h3 className="uppercase text-xl font-semibold text-gray-600">
                  MagSafe
               </h3>
               <p className="text-lg text-gray-500">
                  Snap on a magnetic case, wallet, or both. And get faster wireless
                  charging.
               </p>
            </div>
            <div className="w-1/2">
               <Image
                  src="/images/banner/flash/iphone.png"
                  width={268}
                  height={221}
                  alt="flash info"
                  className="-mb-52"
               />
            </div>
            <button className="absolute top-1/2 right-0 text-gray-500 text-xl">
               <FaChevronRight />
            </button>
         </div>
      </div>
   );
};
export default FlashInfoSection;
