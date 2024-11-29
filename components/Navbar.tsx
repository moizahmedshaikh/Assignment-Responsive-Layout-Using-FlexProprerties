import { Navlinks } from "@/constant/Constant";
import Link from "next/link";
import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <header className="w-full h-[5rem] fixed  z-[10] shadow-md">
      <nav className="flex items-center justify-between h-full sm:w-[90%] w-[95%] m-auto">
        <h1 className="sm:text-3xl text-2xl font-bold">Moiz Ahmed</h1>
        <div className="lg:flex items-center space-x-10 hidden ">
          <div className="flex items-center space-x-10">
            {Navlinks.map((links) => {
              return (
                <Link key={links.id} href={links.url}>
                  <p className="text-black nav_links">{links.lable}</p>
                </Link>
              );
            })}
          </div>
        </div>
        <HiBars3BottomLeft
          onClick={openNav}
          className="w-8 h-8 lg:hidden text-white"
        />
      </nav>
    </header>
  );
};

export default Navbar;
