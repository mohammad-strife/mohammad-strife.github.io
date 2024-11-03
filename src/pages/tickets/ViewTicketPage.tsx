import { IoArrowBackCircle } from "react-icons/io5";
import Messages from "../../components/tickets/Messages";
import MessageInput from "@/components/tickets/MessageInput";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "@/api/axios";
import { useSelector } from "react-redux";
// import axios from "@/api/axios";

const ViewTicketPage = () => {
  const { id } = useParams();
  const { userInfo } = useSelector((state: any) => state.auth);
  const [ticket, setTicket]: any = useState([]);

  useEffect(() => {
    const fetchTicket = async () => {
      const result = await axios.get(`get/ticket/${id}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      setTicket(result.data);
    };
    fetchTicket();
    console.log(ticket.created_at?.slice(0, 10));
  }, []);
  return (
    <div className="w-[943px] mx-auto bg-bgTicket mb-10 rounded-md">
      {/* top section */}
      <div className="grid grid-cols-12 p-6 border-b-2 border-gray-400">
        <div className="col-span-10 flex justify-between items-center">
          <div className="text-2xl">تیکت های من</div>
          <div className="">
            وضعیت: {ticket.isAnswer == 0 ? "پاسخ داده نشده" : "پاسخ داده شده"}
          </div>
          <div className="">تاریخ ارسال: {ticket.created_at?.slice(0, 10)}</div>
          <div className="">شماره تیکت: {ticket.ticketID}</div>
        </div>
        <div className="col-span-2 flex items-center justify-end">
          <Link to="/my-tickets">
            <IoArrowBackCircle className="text-arrow text-2xl" />
          </Link>
        </div>
      </div>

      {/* bottom section */}
      <div className="overflow-auto">
        <p className="text-right m-5 text-xl">عنوان تیکت: {ticket.title}</p>
        <Messages ticket={ticket} />
        <MessageInput />
      </div>
    </div>
  );
};

export default ViewTicketPage;
