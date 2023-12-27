import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
   image: string;
   title: string;
   description: string;
   color: string;
};

const MobileHeroCard: FC<Props> = ({ image, title, description, color }) => {
   return (
      <div className="flex w-full h-64 overflow-hidden">
         <div
            className={`w-1/2 px-5 py-8 flex flex-col items-start justify-center gap-4 bg-[${color}]`}
         >
            <h2 className="text-xl font-semibold inline-block leading-relaxed text-white">
               {title}
            </h2>
            <span className="text-sm inline-block leading-8 text-gray-200">
               {description}
            </span>
            <Link className="text-gray-100 underline text-md" href="#">
               Explore all category
            </Link>
         </div>
         <div className="w-1/2">
            <Image
               src={image}
               alt={title}
               width={219}
               height={280}
               className="object-cover w-full"
            />
         </div>
      </div>
   );
};
export default MobileHeroCard;
