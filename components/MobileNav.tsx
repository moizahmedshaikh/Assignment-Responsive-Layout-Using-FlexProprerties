import { Navlinks } from "@/constant/Constant";
import React from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";


interface Props{
  closeNav: () => void
  showNav: boolean
}

const MobileNav = ({closeNav, showNav}:Props) => {

  const navOpen = showNav? "translate-x-0" : "translate-x-[-100%]";
  

  return (
    <div className="">
      <div
        className={`fixed transform ${navOpen} transition-all duration-500  inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      >
        {/* Nav Links */}
      </div>
      <div
        className={`text-white fixed ${navOpen} transform transition-all duration-500 delay-300 flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0412] z-[10000] space-y-6`}
      >
        {Navlinks.map((link) => {
          return (
            <Link className="flex" key={link.id} href={link.url}>
              <p className="nav_links text-[20px] ml-12 border-b-[1.5px] pb-2 sm:text-[25px]">
                {link.lable}
              </p>
            </Link>
          );
        })}
        <CgClose onClick={closeNav}  className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8" />
      </div>
    </div>
  );
};

export default MobileNav;
