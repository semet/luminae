import Image from "next/image";
import { FC } from "react";

type Props = {
   title: string;
   category: string;
   image: string;
   price: number;
   isNew: boolean;
};

const TrendingCard: FC<Props> = ({ title, category, image, price, isNew }) => {
   return (
      <div className="flex flex-col rounded-lg overflow-hidden relative">
         {isNew && <NewBadge />}
         <div className="w-full">
            <Image
               src={image}
               width={300}
               className="object-cover w-full"
               height={380}
               alt={title}
            />
         </div>
         <div className="p-5 flex justify-between items-center bg-base-800">
            <div className="flex flex-col gap-4">
               <h3 className="text-gray-50 text-lg font-semibold tracking-wide">
                  {title}
               </h3>
               <span className="text-gray-400 text-xs">{category}</span>
            </div>
            <button className="btn btn-outline border-white text-white hover:text-base-800 hover:bg-white text-xs font-thin">
               {`$${price} shop now`}
            </button>
         </div>
      </div>
   );
};
export default TrendingCard;

const NewBadge = () => {
   return (
      <div className="absolute top-3 left-3 flex items-center gap-2 bg-secondary-600 px-3.5 py-2 rounded-lg text-gray-100">
         <svg
            width="28"
            height="28"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <g id="Icon/New arivals">
               <path
                  id="Vector"
                  d="M6.64846 12.4833C6.82342 13.1259 6.43593 13.7865 5.78297 13.9587C5.13001 14.1309 4.45885 13.7495 4.28389 13.1068C4.10893 12.4642 4.49642 11.8036 5.14938 11.6314M6.64846 12.4833C6.4735 11.8406 5.80234 11.4592 5.14938 11.6314M6.64846 12.4833L14.3333 10.4566M5.14938 11.6314L3.09022 4.06797C2.91526 3.42533 2.2441 3.04395 1.59114 3.21615L1 3.37204M8.29457 4.56623L9.47685 4.25444M7.9467 10.2702L12.6759 9.02301C13.3288 8.85081 13.7163 8.19025 13.5413 7.54761L12.2742 2.89317C12.0992 2.25052 11.4281 1.86915 10.7751 2.04135L6.04594 3.2885C5.39299 3.4607 5.00549 4.12125 5.18045 4.7639L6.44762 9.41834C6.62258 10.061 7.29374 10.4424 7.9467 10.2702Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
            </g>
         </svg>
         <span>New Arrival</span>
      </div>
   );
};
