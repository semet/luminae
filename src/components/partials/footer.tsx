import { FC, ReactNode } from "react";

type Props = {
   children?: ReactNode;
};

const FooterContainer: FC<Props> = ({ children }) => {
   return (
      <div className="flex flex-col w-full relative mt-24 lg:mt-18">{children}</div>
   );
};
export default FooterContainer;
