import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="relative max-w-screen-lg m-auto z-10 px-4 w-full">
      <ul className="flex items-center justify-between h-[70px] ">
        <li>
          <Image
            src="/netflix-icon.svg"
            alt="Netflix Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority={true}
          ></Image>
        </li>
        <li>
          <button className="py-2 px-5 bg-bright-red hover:bg-red-600 rounded-md font-semibold">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
