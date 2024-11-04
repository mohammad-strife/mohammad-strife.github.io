import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "../../api/axios";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { IoDocument } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const TicketSchema = z.object({
  title: z.string().min(3, {
    message: "عنوان تیکت باید بیشتر از ۳ کارکتر باشد",
  }),
  body: z.string().min(10, {
    message: "متن تیکت باید بیشتر از ۱۰ کارکتر باشد",
  }),
  priority: z.string(),
  // file: z.any(),
  // .refine((file) => file.size < 4000000, "Max size is 4MB")
  // .refine(
  //   (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //   "Only .jpg, .jpeg, .png and .webp formats are supported."
  // ),
});
type FormField = z.infer<typeof TicketSchema>;

const NewTicketPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(TicketSchema),
  });

  const navigate = useNavigate();

  const { userInfo } = useSelector((state: any) => state.auth);
  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.post("/tickets", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      console.log(response);
      console.log(JSON.stringify(data));
      navigate("/my-tickets");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="container mx-auto">
      <div className="w-full mx-auto bg-bgTicket rounded-lg mb-20">
        <div className="grid grid-cols-12 p-3 border-b-2 border-gray-400">
          <div className="text-right col-span-10 md:col-span-4">
            <p className="text-2xl">ایجاد تیکت</p>
            <span>
              تیکت های ارسالی شما در اسرع وقت پاسخ داده خواهد شد ساعت پاسخ گویی
              شنبه تا پنجشنبه از ساعت ۹ صبح الی ۹ شب خواهد بود. (به غیر از روز
              های تعطیل رسمی)
            </span>
          </div>
          <div className="col-span-2 col-start-13">
            <Link to="/my-tickets">
              <IoArrowBackCircle className="text-arrow text-2xl" />
            </Link>
          </div>
        </div>
        <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-12 px-4 gap-7">
            <div className="col-span-12 md:col-span-6">
              <label htmlFor="ticket" className="text-2xl">
                عنوان تیکت
              </label>
              <input
                {...register("title")}
                type="text"
                id="ticket"
                className="rounded-md text-right w-full p-2 mt-2"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <label htmlFor="priority" className="text-2xl">
                اولویت
              </label>
              <select
                id="priority"
                className="text-center rounded-md bg-inputTicket w-full p-2 mt-2"
                {...register("priority")}
              >
                <option value="">بالا - وسط - پایین</option>
                <option value="3">بالا</option>
                <option value="2">وسط</option>
                <option value="1">پایین</option>
              </select>
            </div>
          </div>
          {errors.title && (
            <div className="text-right mr-4 mt-2">{errors.title.message}</div>
          )}
          <div className="flex flex-col mt-20">
            <label htmlFor="" className="text-right pr-10 text-2xl my-4">
              متن
            </label>
            <textarea
              {...register("body")}
              className="w-full h-[461px] rounded-md mx-auto bg-inputTicket"
            ></textarea>
            {errors.body && (
              <div className="text-right mr-4 mt-2">{errors.body.message}</div>
            )}
          </div>
          <div className="mr-4 mt-10 flex gap-3">
            {/* <p className="bg-inputTicket p-2 rounded-md cursor-pointer">
              <label
                htmlFor="uploadFile"
                className="flex items-center cursor-pointer gap-1 p-1"
              >
                <IoDocument />
                ارسال پیوست
                <input
                  type="file"
                  id="uploadFile"
                  className="hidden"
                  {...register("file")}
                />
              </label>
            </p> */}
            {/* {errors.file && (
            <div className="text-right mr-4 mt-2">{errors.file.message}</div>
          )} */}
            <Button
              className="bg-btnOrange p-2"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "در حال ارسال" : "ارسال تیکت"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewTicketPage;
