import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Tickets from "../../components/tickets/Tickets";
import { GoPlusCircle } from "react-icons/go";
import { Link } from "react-router-dom";


const MyTicketsPage = () => {
  
  return (
    <div className="container mx-auto bg-bgTicket mb-10 rounded-md">
      <div className="grid grid-cols-12 p-3 border-b-2 border-gray-400">
        <div className="text-right col-span-5 ">
          <p className="text-3xl my-2">تیکت های من</p>
          <span>
            تیکت های ارسالی شما در اسرع وقت پاسخ داده خواهد شد ساعت پاسخ گویی
            شنبه تا پنجشنبه از ساعت ۹ صبح الی ۹ شب خواهد بود. (به غیر از روز های
            تعطیل رسمی)
          </span>
        </div>
        <div className="col-span-6 flex items-center justify-center gap-7">
          <div className="flex items-center gap-2">
            <Label htmlFor="airplane-mode">فقط پاسخ داده نشده</Label>
            <Switch id="airplane-mode" />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="airplane-mode">فقط پاسخ داده شده</Label>
            <Switch id="airplane-mode" />
          </div>
        </div>
      </div>

      <div className="px-10 py-4 overflow-auto">
        <div className="text-left">
          <button className="p-2 bg-btnApp rounded-md">
            <Link to="new-ticket" className="flex items-center gap-2">
              تیکت جدید
              <GoPlusCircle />
            </Link>
          </button>
        </div>
        <Tickets />
      </div>
    </div>
  );
};

export default MyTicketsPage;
