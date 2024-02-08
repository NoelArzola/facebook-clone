import React from "react";
import Image from "next/image";

interface SidebarRowProps {
  readonly src?: string | null | undefined;
  readonly Icon?: any;
  readonly title: string | null | undefined;
}

function SidebarRow({ src, Icon, title }: SidebarRowProps) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 hover:dark:bg-[#3A3B3C] rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
