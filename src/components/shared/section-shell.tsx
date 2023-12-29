import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
   title: string;
   link: string;
   children?: ReactNode;
};

const SectionShell: FC<Props> = ({ link, title, children }) => {
   return (
      <div className="main-padding mt-16 flex flex-col gap-6">
         <div className="flex justify-between items-end w-full px-1">
            <h3 className="text-[1.5rem] font-semibold">{title}</h3>
            <Link href={link} className="text-sm">
               View all &#x203A;
            </Link>
         </div>
         {children}
      </div>
   );
};
export default SectionShell;
