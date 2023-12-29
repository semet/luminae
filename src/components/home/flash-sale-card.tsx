import Image from "next/image";
import { FC } from "react";
import { FaStar } from "react-icons/fa";

type Props = {
   endHour: string;
   title: string;
   image: string;
   category: string;
   actual: number;
   price: number;
   discount: number;
};

const FlashSaleCard: FC<Props> = ({
   endHour,
   title,
   image,
   category,
   actual,
   price,
   discount,
}) => {
   const time = endHour.split(" ");
   return (
      <div className="flex flex-col items-center py-4 border rounded-md shadow-lg">
         {/* top */}
         <div className="flex flex-col md:flex-row lg:flex-col items-center gap-4 lg:gap-1">
            <span className="mb-4 font-semibold text-gray-400 self-end">
               Deal of the Day
            </span>
            <div className="flex gap-2.5 self-start">
               <div className="flex flex-col">
                  <div className="font-semibold text-lg">{time[0]}</div>
                  <span className="text-xs text-gray-500">hour</span>
               </div>
               <span className="font-bold text-gray-400">:</span>
               <div className="flex flex-col">
                  <div className="font-semibold text-lg">{time[1]}</div>
                  <span className="text-xs text-gray-500">min</span>
               </div>
               <span className="font-bold text-gray-400">:</span>
               <div className="flex flex-col">
                  <div className="font-semibold text-lg">{time[2]}</div>
                  <span className="text-xs text-gray-500">sec</span>
               </div>
            </div>
         </div>
         {/* image */}
         <div className="py-[1.06rem]">
            <Image
               src={image}
               width={300}
               className="object-cover"
               height={380}
               alt={title}
            />
         </div>
         {/* description */}
         <div className="self-start flex flex-col gap-3 px-2 sm:px-6 xl:px-12 w-full py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
               <h3 className="font-semibold tracking-wide">{title}</h3>
               <span className="text-xs">{category}</span>
               <div className="flex items-center">
                  {Array(5)
                     .fill("")
                     .map((_, i) => (
                        <FaStar className="text-yellow-400 text-sm" key={i} />
                     ))}
                  <span className="text-xs ml-2">(54)</span>
               </div>
               <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="text-red-500 text-xs sm:text-sm font-semibold block">
                     ${actual}
                  </span>
                  <span className="text-xs text-gray-500 block">${price}</span>
                  <div className="badge bg-red-500 rounded-none text-xs text-white whitespace-nowrap">
                     - {discount}%
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
export default FlashSaleCard;
