import React from "react";

function HeaderIcon({ Icon, active, ariaLabel }) {
  return (
    <a
      className={`flex items-center ${
        !active && "rounded-xl md:hover:bg-gray-100 md:hover:dark:bg-[#3A3B3C]"
      } cursor-pointer md:px-10 h-14 active:border-b-2 active:border-blue-500 group ${
        active && "border-b-2 border-blue-500"
      }`}
      aria-label={ariaLabel}
      role="link"
      href="/"
    >
      <Icon
        className={`h-5 sm:h-7 text-center text-gray-500 dark:text-[#B0B3B8] group-hover:text-blue-500 mx-auto ${
          active && "text-blue-500"
        }`}
      />
    </a>
  );
}

export default HeaderIcon;
