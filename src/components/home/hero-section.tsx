import { url } from "inspector";
import Image from "next/image";

const HomeHeroSection = () => {
   return (
      <div className="w-full flex relative h-[28.75rem]">
         {/* left */}
         <div className="w-1/2">
            <Image
               src="/images/banner/1.png"
               width={547}
               height={460}
               alt="hero 1"
               className="h-full w-full object-cover"
            />
         </div>
         {/* right */}
         <div
            className="w-full bg-no-repeat bg-cover relative"
            style={{ backgroundImage: "url('/images/bg/1.png')" }}
         >
            <div className="flex flex-col gap-[2rem] items-center justify-center h-full my-auto">
               <h3 className="text-[1.2rem] lg:text-[2rem] uppercase text-white">
                  Kimonos, Caftans & Pareos
               </h3>
               <span className="text-[.95rem] lg:text-[1.75rem] text-gray-200">
                  Poolside glam included From $4.99
               </span>
               <button className="btn bg-primary-700 hover:bg-primary-900 uppercase text-gray-100 tracking-wider font-light px-10 rounded-sm border-none cool-hover">
                  <svg
                     width="25"
                     height="24"
                     viewBox="0 0 25 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M12.5 2V6"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M14.5 4L10.5 4"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M4.5 10V16.7639C4.5 17.5215 4.928 18.214 5.60557 18.5528L11.6056 21.5528C12.1686 21.8343 12.8314 21.8343 13.3944 21.5528L19.3944 18.5528C20.072 18.214 20.5 17.5215 20.5 16.7639V10"
                        stroke="white"
                     />
                     <path
                        d="M18.5 5L20.5 6L12.5 10L4.5 6L6.5 5"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M20.5 6L12.5 10L14.5 13L22.5 9L20.5 6Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                     <path
                        d="M4.5 6L12.5 10L10.5 13L2.5 9L4.5 6Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
                  shop now
               </button>
            </div>
         </div>
         {/* center */}
         <div className="hidden absolute top-1/2 transform -translate-y-1/2 left-[26.8%] bg-white lg:flex flex-col">
            <div className="p-8">
               <span className="block text-center text-md tracking-wide font-semibold">
                  Supper Essentials
               </span>
               <span className="block text-center text-selected font-semibold">
                  20% off
               </span>
            </div>
            <div className="bg-base-800 p-2">
               <span className="text-center block text-gray-100 text-xs">
                  19 Jul-30 Jul
               </span>
            </div>
         </div>
      </div>
   );
};
export default HomeHeroSection;
