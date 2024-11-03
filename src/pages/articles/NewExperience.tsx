import { useState } from "react";
import { useNavigate } from "react-router-dom";
import banana from "@/assets/videos/banana.mp4";
import axios from "@/api/axios";
import CkEditor from "@/components/articles/CkEditor";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import ArticleMenu from "@/components/menu/ArticleMenu";
import ArticleImageUploader from "@/components/articles/ArticleImageUploader";

const ArticleSchema = z.object({
  title: z.string().min(4, {
    message: "عنوان حداقل باید ۴ کارکتر باشد",
  }),
});

type ArticleForm = z.infer<typeof ArticleSchema>;

const NewExperience = () => {
  const [content, setContent]: any = useState();
  const { userInfo } = useSelector((state: any) => state.auth);
  const [url, setUrl]: any = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ArticleForm>({
    resolver: zodResolver(ArticleSchema),
  });

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ArticleForm> = async (data: any) => {
    console.log({ ...data, body: content, url });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.post(
        "/article",
        { ...data, body: content, url },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      console.log(response);

      return navigate("/publish-article");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container mx-auto my-5">
      <div className="grid grid-cols-12">
        <ArticleMenu />
        <div className="col-span-12 md:col-span-9 p-2">
          <video controls className="rounded-xl">
            <source src={banana} type="video/mp4" />
            Your browser does not support the video.
          </video>
        </div>
      </div>

      <div className="space-y-5 mt-28 pb-5 border-b border-gray-500">
        <p className="text-profile text-3xl">نوشتن تجربه جدید از سفر</p>
        <p className="text-lg w-7/12">
          توی این بخش میتونی تجربه هایی که از سفرت به یه مکان یا شهری که رفتی رو
          بنویسی و اونو در سایت منتشر کنی تا بقیه هم از تجربه ات استفاده کنن و
          هم اینکه جزو نویسنده های سایت ما بشی، اگه نمیدونی چطوری باید یه مقاله
          بنویسی بهت پیشنهاد میکنم فیلم آموزشی بالا که در مورد مقاله نویسی با
          هوش مصنوعی که میتونه بهت کمک زیادی بهت بکنه رو تماشا کن.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-10 my-10"
      >
        <div className="col-span-12 flex flex-col">
          <label htmlFor="titleArticle">عنوان مقاله</label>
          <input
            type="text"
            placeholder="عنوان"
            id="titleArticle"
            className="w-1/3 rounded-md bg-stone-300 text-black p-2"
            {...register("title")}
          />
          {errors.title && (
            <div className="text-right">{errors.title.message}</div>
          )}
        </div>
        <div className="col-span-12">
          <ArticleImageUploader setUrl={setUrl} />
        </div>
        <div className="col-span-12 space-y-10">
          <CkEditor content={content} setContent={setContent} />
        </div>
        <div className="col-span-12 text-left">
          <button
            type="button"
            className="rounded-md bg-inputTicket p-5 px-10 mx-2"
          >
            انصراف
          </button>
          <button
            type="submit"
            className="rounded-md bg-btnOrange p-5 px-10 mr-2"
          >
            ادامه
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewExperience;
