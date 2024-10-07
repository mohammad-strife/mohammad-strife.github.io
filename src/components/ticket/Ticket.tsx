import { HiMiniEye } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Ticket = () => {
  return (
    <div className="bg-detailsTicket flex flex-row-reverse justify-between rounded-md p-5 text-white my-10">
      <div className="flex flex-col text-center gap-5">
        <span>شماره تیکت</span>
        <small>37445</small>
      </div>
      <div className="flex flex-col text-center gap-5">
        <span>عنوان تیکت</span>
        <small>متن تیکت</small>
      </div>
      <div className="flex flex-col text-center gap-5">
        <span>تاریخ</span>
        <small>۱۴۰۲/۰۲/۰۲</small>
      </div>
      <div className="flex flex-col text-center gap-5">
        <span>وضعیت</span>
        <small className="text-ticketState">بسته شده</small>
      </div>
      <div className="flex flex-col text-center gap-5">
        <span>مشاهده تیکت</span>
        <small className="mx-auto">
          <Link to='/view-ticket'>
            <HiMiniEye className="size-5" />
          </Link>
        </small>
      </div>
    </div>
  );
};

export default Ticket;
