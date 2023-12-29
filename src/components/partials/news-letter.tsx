import { PiPaperPlaneTilt } from "react-icons/pi";

const NewsLetter = () => {
   return (
      <div className="w-[571px] bg-footer-700/85 px-14 py-8 absolute left-1/2 md:-top-[29%] lg:-top-[39.5%] transform -translate-x-1/2 translate-y-1/2 hidden md:flex flex-col items-center gap-4 rounded-lg ">
         <h2 className="text-white text-3xl">
            Luminae <span className="text-gray-300">Store</span>
         </h2>
         <p className="text-sm text-gray-300">
            Register your email not to miss the last minutes off+ Free delivery
         </p>
         <div className="flex w-full max-w-xs justify-center items-center bg-white pr-4 rounded-md overflow-hidden text-gray-700 mt-2">
            <input
               type="text"
               placeholder="Enter your email"
               className="input input-bordered w-full max-w-xs !outline-none !border-none"
            />
            <div className="text-xl text-gray-500">
               <PiPaperPlaneTilt />
            </div>
         </div>
      </div>
   );
};
export default NewsLetter;
