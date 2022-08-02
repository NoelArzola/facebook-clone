import React from "react";
import { useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow";
import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Sidebar() {
  const [session] = useSession();
  return (
    <div className="hidden sm:block p-2 mt-5 max-w-[600px] xl:min-w-[300px] dark:text-[#E4E6EB]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
