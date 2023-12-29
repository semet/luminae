import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi2";

const SignIn = () => {
   return (
      <Link href="#" className="flex gap-[.4rem] items-center text-gray-300">
         <HiOutlineUser className="text-[1.5rem] lg:text-3xl" />
         <span className="text-[0.75rem] md:text-[0.875rem] whitespace-nowrap">
            Sign in
         </span>
      </Link>
   );
};

export default SignIn;
