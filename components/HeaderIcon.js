import React from "react";

function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center rounded-xl cursor-pointer md:px-10 h-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`h-5 sm:h-7 text-center text-gray-500 group-hover:text-blue-500 mx-auto ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
