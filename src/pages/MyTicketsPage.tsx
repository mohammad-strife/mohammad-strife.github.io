import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Tickets from "../components/ticket/Tickets";
import { GoPlusCircle } from "react-icons/go";
import { Link } from "react-router-dom";

const MyTicketsPage = () => {
  return (
    <div className="w-[934px] mx-auto bg-bgTicket my-10 rounded-md">
      <div className="grid grid-cols-12 p-3 border-b-2 border-gray-400">
        <div className="col-span-6 flex items-center justify-center space-x-7">
          <div className="flex items-center gap-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">فقط پاسخ داده نشده</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">فقط پاسخ داده شده</Label>
          </div>
        </div>

        <div className="text-right col-span-5 col-start-8">
          <p className="text-3xl my-2">تیکت های من</p>
          <span>
            تیکت های ارسالی شما در اسرع وقت پاسخ داده خواهد شد ساعت پاسخ گویی
            شنبه تا پنجشنبه از ساعت ۹ صبح الی ۹ شب خواهد بود. (به غیر از روز های
            تعطیل رسمی)
          </span>
        </div>
      </div>
      <div className="px-10 py-4 overflow-auto">
        <button className="p-2 bg-btnApp rounded-md">
          <Link to="/create-ticket" className="flex items-center gap-2">
            تیکت جدید
            <GoPlusCircle />
          </Link>
        </button>

        <Tickets />
      </div>
    </div>
  );
};

export default MyTicketsPage;
