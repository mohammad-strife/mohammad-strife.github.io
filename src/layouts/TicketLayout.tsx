import ProfileMenu from "@/components/menu/ProfileMenu";
import { Outlet } from "react-router-dom";

const TicketLayout = () => {
  return (
    <div className="container mx-auto grid grid-cols-9">
      <div className="col-span-12 md:col-span-2">
        <ProfileMenu />
      </div>
      <div className="col-span-12 md:col-span-7">
        <Outlet />
      </div>
    </div>
  );
};

export default TicketLayout;
