import Image from "next/image";
import { FC } from "react";
import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";

type Props = {
   title: string;
   image: string;
   description: string;
   rating: number;
   actual: number;
   price: number;
   discount: number;
};

const SimpleProductCard: FC<Props> = ({
   title,
   image,
   description,
   rating,
   actual,
   price,
   discount,
}) => {
   return (
      <div className="flex flex-col rounded-lg shadow-md overflow-hidden relative">
         <div className="w-full">
            <Image
               src={image}
               width={300}
               className="object-cover w-full"
               height={380}
               alt={title}
            />
         </div>
         <div className="flex flex-col gap-4 p-5">
            <div className="flex justify-between items-center">
               <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold tracking-wide text-gray-700">
                     {title}
                  </h3>
                  <span className="text-xs text-gray-600">{description}</span>
               </div>
               <button>
                  <GoHeart className="text-3xl" />
               </button>
            </div>
            <div className="flex items-center">
               {Array(5)
                  .fill("")
                  .map((_, i) => (
                     <FaStar className="text-yellow-400 text-sm" key={i} />
                  ))}
               <span className="text-xs ml-2">({rating})</span>
            </div>
            <div className="flex items-center justify-start gap-6 text-sm">
               <span className="text-red-500 text-lg font-semibold block">
                  ${actual}
               </span>
               <span className="text-xs text-gray-500 block">${price}</span>
               <div className="text-red-500 rounded-none text-xs">- {discount}%</div>
            </div>
         </div>
      </div>
   );
};
export default SimpleProductCard;
