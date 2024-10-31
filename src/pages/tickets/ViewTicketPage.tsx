import { IoArrowBackCircle } from "react-icons/io5";
import Messages from "../../components/tickets/Messages";
import MessageInput from "@/components/tickets/MessageInput";
import { Link, useLoaderData, useParams } from "react-router-dom";
// import axios from "@/api/axios";

const ViewTicketPage = () => {
  const { id } = useParams();
  console.log(id)
  // const ticket: any = useLoaderData();
  return (
    <div className="w-[943px] mx-auto bg-bgTicket mb-10 rounded-md">
      {/* top section */}
      <div className="grid grid-cols-12 p-6 border-b-2 border-gray-400">
        <div className="col-span-10 flex justify-between items-center">
          <div className="text-2xl">تیکت های من</div>
          <div className="">وضعیت: در حال برسی</div>
          <div className="">تاریخ ارسال:۱۴۰۳/۰۹/۰۱</div>
          <div className="">شماره تیکت: ۹۱۹۲۳</div>
        </div>
        <div className="col-span-2 flex items-center justify-end">
          <Link to="/my-tickets">
            <IoArrowBackCircle className="text-arrow text-2xl" />
          </Link>
        </div>
      </div>

      {/* bottom section */}
      <div className="overflow-auto">
        <p className="text-right m-5 text-xl">عنوان تیکت: {}</p>
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
};

// const ticketLoader = async ({ params }: any) => {
//   const result = await fetch(
//     `http://localhost:8000/api/v1/show_tickets/${params.id}`
//   );
//   const data = await result.json();
//   return data;
// };

export default ViewTicketPage;
