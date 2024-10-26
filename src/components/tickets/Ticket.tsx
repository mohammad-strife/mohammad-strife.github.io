import { HiMiniEye } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Ticket = ({ ticket }: any) => {
  // ticket.created_at.slice(1,3)
  return (
    <div className="bg-detailsTicket flex justify-between rounded-md p-5 text-white my-10">
      <div className="flex flex-col text-center gap-5">
        <span>شماره تیکت</span>
        <small>{ticket.id}</small>
      </div>
      <div className="flex flex-col text-center gap-5">
        <span>عنوان تیکت</span>
        <small>{ticket.title}</small>
      </div>
      <div className="flex flex-col text-center gap-5">
        <span>تاریخ</span>
        <small>{ticket.created_at.slice(0, 10)}</small>
      </div>
      <div className="flex flex-col text-center gap-5">
        <span>وضعیت</span>
        <small className="text-ticketState">{ticket.is_Answer}</small>
      </div>
      <div className="flex flex-col text-center gap-5">
        <span>مشاهده تیکت</span>
        <small className="mx-auto">
          <Link to={`view-ticket/${ticket.id}`}>
            <HiMiniEye className="size-5" />
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Ticket;
