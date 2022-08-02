import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

function Header() {
  const [session] = useSession();
  return (
    <header className="flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-[#242526] shadow-md px-2 lg:px-5">
      <div className="flex items-center">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="bg-gray-100 dark:bg-[#3A3B3C] dark:text-[#E4E6EB] flex items-center ml-2 p-2 rounded-full">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500 dark:placeholder-[#8A8D91]"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2 dark:text-[#E4E6EB]">
            <HeaderIcon active Icon={HomeIcon} ariaLabel="Home" />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>
      </div>
      <div className="flex items-center sm:space-x-2 justify-end">
        <div
          className="flex items-center sm:space-x-2 cursor-pointer"
          onClick={signOut}
        >
          <Image
            className="rounded-full cursor-pointer"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
          />
          <p className="flex items-center whitespace-nowrap font-semibold pr-3 dark:text-[#E4E6EB]">
            {session.user.name}
          </p>
        </div>

        <ViewGridIcon className="icon dark:bg-[#3A3B3C] dark:text-[#E4E6EB]" />
        <ChatIcon className="icon dark:bg-[#3A3B3C] dark:text-[#E4E6EB]" />
        <BellIcon className="icon dark:bg-[#3A3B3C] dark:text-[#E4E6EB]" />
        <ChevronDownIcon className="icon dark:bg-[#3A3B3C] dark:text-[#E4E6EB]" />
      </div>
    </header>
  );
}

export default Header;
