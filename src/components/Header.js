import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      {/* top */}
      <div className="flex items-center bg-amazon_blue top-0 z-50  shadow-lg p-1 py-3 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="w-auto h-auto cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ml-2 transition-all ">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* Right */}

        <div className="text-white">
          <div>
            <p >Atharva</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>

          </div>

          <div></div>

          <div></div>
        </div>
      </div>

      {/* Bottom  */}
      <div></div>
    </header>
  );
}

export default Header;
