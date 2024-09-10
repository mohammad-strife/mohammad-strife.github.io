import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Login from "../Login";
import { OtpForm } from "./OtpForm";
import { useState } from "react";

const UserSchema = z.object({
  name: z.string().min(3, {
    message: "نام و نام خانوادگی باید بیشتر از 3 حروف باشد",
  }),
  phone: z.string().min(11, {
    message: "شماره همراه حداقل باید 11 عدد باشد",
  }),
  password: z.string().min(8, {
    message: "رمز عبور حداقل باید 8 حروف باشد",
  }),
});

type FormFields = z.infer<typeof UserSchema>;

const Signup = ({ isHome = true }) => {
  const [dataForm, setDataForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      UserSchema.safeParse(data).success
        ? setDataForm(true)
        : setDataForm(false);
      console.log(UserSchema.safeParse(data).success);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={
            isHome
              ? "bg-btnOrange hover:bg-btnOrange font-bold"
              : "bg-white text-gray-500 hover:bg-white underline"
          }
        >
          {isHome ? "ثبت نام" : "ایجاد حساب"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">فرم ثبت نام</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <Label htmlFor="name" className="text-right">
              نام و نام خانوادگی
            </Label>
            <div className="grid grid-cols-1 gap-4">
              <Input
                {...register("name")}
                id="name"
                className="col-span-3 focus-visible:ring-offset-0 focus-visible:ring-blue-400"
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </div>
            <Label htmlFor="phone" className="text-right">
              شماره موبایل
            </Label>
            <div className="grid grid-cols-1 gap-4">
              <Input
                {...register("phone")}
                id="phone"
                className="col-span-3 focus-visible:ring-offset-0 focus-visible:ring-blue-400"
              />
              {errors.phone && (
                <div className="text-red-500">{errors.phone.message}</div>
              )}
            </div>
            <Label htmlFor="passowrd" className="text-right">
              رمزعبور
            </Label>
            <div className="grid grid-cols-1 gap-4">
              <Input
                {...register("password")}
                id="password"
                className="col-span-3 focus-visible:ring-offset-0 focus-visible:ring-blue-400"
              />
              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
            </div>
          </div>
          <DialogFooter className="grid grid-cols-1">
            <button disabled={isSubmitting} type="submit">
              {isSubmitting ? "... در حاال ارسال" : <OtpForm />}
            </button>
            <DialogDescription className="text-center my-2">
              <p>قبلا ثبت نام کرده‌اید؟</p>
              <Login />
            </DialogDescription>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;
