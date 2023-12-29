const MainFooter = () => {
   return (
      <div className="bg-footer-100 pt-32 px-20 sm:px-32 lg:px-60 pb-14 grid grid-cols-2 lg:grid-cols-4 gap-12">
         <div className="w-full flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-gray-800">Company</h2>
            <ul className="flex flex-col gap-4 text-gray-600">
               <li>About Us</li>
               <li>Our Store</li>
               <li>Contact Us</li>
            </ul>
         </div>
         <div className="w-full flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-gray-800">
               Career Opportunities
            </h2>
            <ul className="flex flex-col gap-4 text-gray-600">
               <li>Selling Programs</li>
               <li>Advertise</li>
               <li>Cooperation</li>
            </ul>
         </div>
         <div className="w-full flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-gray-800">How to Buy</h2>
            <ul className="flex flex-col gap-4 text-gray-600">
               <li>Making Payments</li>
               <li>Delivery Options</li>
               <li>Buyer Protection</li>
               <li>New User Guide</li>
            </ul>
         </div>
         <div className="w-full flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-gray-800">Help</h2>
            <ul className="flex flex-col gap-4 text-gray-600">
               <li>Contact Us</li>
               <li>FAQ</li>
               <li>Privacy Policy</li>
            </ul>
         </div>
      </div>
   );
};
export default MainFooter;
