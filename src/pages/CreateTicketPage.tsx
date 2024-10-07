import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "../api/axios";

import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoDocument } from "react-icons/io5";

const TicketSchema = z.object({
  title: z.string().min(3, {
    message: "عنوان تیکت باید بیشتر از ۳ کارکتر باشد",
  }),
});
type FormField = z.infer<typeof TicketSchema>;

const CreateTicketPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(TicketSchema),
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.post("", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });

      console.log(response);

      console.log(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[992px] mx-auto bg-bgTicket rounded-lg my-20">
      <div className="grid grid-cols-12 p-3 border-b-2 border-gray-400">
        <div className="col-span-2">
          <Link to="/my-ticket">
            <IoArrowBackCircle className="text-arrow text-2xl" />
          </Link>
        </div>

        <div className="text-right col-span-4 col-start-9">
          <p className="text-2xl">ایجاد تیکت</p>
          <span>
            تیکت های ارسالی شما در اسرع وقت پاسخ داده خواهد شد ساعت پاسخ گویی
            شنبه تا پنجشنبه از ساعت ۹ صبح الی ۹ شب خواهد بود. (به غیر از روز های
            تعطیل رسمی)
          </span>
        </div>
      </div>
      <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 px-4 gap-7 text-right">
          <div className="col-span-6">
            <label htmlFor="priority" className="text-2xl my-2">
              اولویت
            </label>
            <select
              name=""
              id="priority"
              className="text-center rounded-md bg-inputTicket w-full"
            >
              <option value="">بالا - وسط - پایین</option>
              <option value="high">بالا</option>
              <option value="middle">وسط</option>
              <option value="low">پایین</option>
            </select>
          </div>
          <div className="col-span-6">
            <label htmlFor="ticket" className="text-2xl my-2">
              عنوان تیکت
            </label>
            <input
              {...register("title")}
              type="text"
              id="ticket"
              className="rounded-md text-right w-full"
            />
          </div>
        </div>
        {errors.title && (
          <div className="text-red-500 text-right mr-4">
            {errors.title.message}
          </div>
        )}
        <div className="flex flex-col mt-40">
          <label htmlFor="" className="text-right pr-10 text-2xl my-4">
            متن
          </label>
          <textarea
            name=""
            id=""
            className="w-[890px] h-[461px] rounded-md mx-auto bg-inputTicket"
          ></textarea>
        </div>
        <div className="text-right mr-4 mt-10 space-x-5 flex justify-end">
          <button
            className="bg-btnOrange p-2 rounded-md"
            disabled={isSubmitting}
          >
                        {isSubmitting ? "در حال ارسال" : "ارسال تیکت"}
            
          </button>
          <p className="bg-inputTicket p-2 rounded-md cursor-pointer">
            <span className="flex items-center gap-2">
              <IoDocument />
              ارسال پیوست
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default CreateTicketPage;
