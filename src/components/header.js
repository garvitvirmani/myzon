import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { selectItems } from "../slices/basketSlice";

export default function Header() {
  // const { session } = useSession();

  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/./logo.jpg"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* seach  */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4"></SearchIcon>
        </div>
        {/* right nav */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={signIn} className="cursor-pointer  link">
            <p>hello Yogesh</p>
            <p className="font-extrabold md:text-sm">Account & list</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0  md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold ">
              0
            </span>
            <ShoppingCartIcon className="h-10"></ShoppingCartIcon>
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav bar */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1"></MenuIcon>
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Today's Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper's Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}
