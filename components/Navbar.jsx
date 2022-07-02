import React, { useState, useEffect, useContext } from 'react';

import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import images from '../assets';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-dark-1 border-nft-gray-1">
      <div className="flex flex-1 justify-start">
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer" onClick={() => {}}>
            <Image
              src={images.logo02}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className="dark:text-white text-nft-black-1 font-semibold ml-1">NFT Bazar</p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex" onClick={() => {}}>
            <Image
              src={images.logo02}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-initial justify-end">
        <div className="flex items center mr-2">
          <input type="checkbox" className="checkbox" id="checkbox" onChange={() => {}} />
          <label htmlFor="checkbox" id="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
            <BsFillMoonFill color="white" width={3} height={3} />
            <BsFillSunFill color="white" width={3} height={3} />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>

        </div>
      </div>
    </nav>

  );
};

export default Navbar;
