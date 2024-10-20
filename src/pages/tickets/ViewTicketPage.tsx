import { IoArrowBackCircle } from "react-icons/io5";
import Messages from "../../components/tickets/Messages";
import MessageInput from "@/components/tickets/MessageInput";
import { Link } from "react-router-dom";

const ViewTicketPage = () => {
  return (
    <div className="w-[943px] mx-auto bg-bgTicket my-10 rounded-md">
      {/* top section */}
      <div className="grid grid-cols-12 p-6 border-b-2 border-gray-400">
        <div className="col-span-2 flex items-center">
          <Link to="/my-tickets">
            <IoArrowBackCircle className="text-arrow text-2xl" />
          </Link>
        </div>
        <div className="col-span-10 flex justify-between items-center">
          <div className="">شماره تیکت: ۹۱۹۲۳</div>
          <div className="">تاریخ ارسال:۱۴۰۳/۰۹/۰۱</div>
          <div className="">وضعیت: در حال برسی</div>
          <div className="text-2xl">تیکت های من</div>
        </div>
      </div>

      {/* bottom section */}
      <div className="overflow-auto">
        <p className="text-right m-5 text-xl">
          عنوان تیکت: مشکل در کامنت گذاشتن در سایت
        </p>
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
};

export default ViewTicketPage;
