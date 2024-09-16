import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Login from "./Login";
import axios from "../api/axios";
import LoginForm from "./LoginForm";

const UserSchema = z.object({
  username: z.string().min(3, {
    message: "نام و نام خانوادگی باید بیشتر از 3 حروف باشد",
  }),
  cellphone: z.string().min(11, {
    message: "شماره همراه حداقل باید 11 عدد باشد",
  }),
});

type FormFields = z.infer<typeof UserSchema>;

const SignupForm = ({ setStep }: any) => {
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
      const response = await axios.post("/auth/signup", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });

      console.log(response);

      UserSchema.safeParse(data).success && setStep("Otp");

      console.log(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
              {...register("username")}
              id="name"
              className="col-span-3 focus-visible:ring-offset-0 focus-visible:ring-blue-400"
            />
            {errors.username && (
              <div className="text-red-500">{errors.username.message}</div>
            )}
          </div>
          <Label htmlFor="phone" className="text-right">
            شماره موبایل
          </Label>
          <div className="grid grid-cols-1 gap-4">
            <Input
              {...register("cellphone")}
              id="phone"
              className="col-span-3 focus-visible:ring-offset-0 focus-visible:ring-blue-400"
            />
            {errors.cellphone && (
              <div className="text-red-500">{errors.cellphone.message}</div>
            )}
          </div>
        </div>
        <DialogFooter className="grid grid-cols-1">
          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "در حال ارسال" : "ادامه"}
          </button>
          <DialogDescription className="text-center my-2">
            <p>قبلا ثبت نام کرده‌اید؟</p>
            <button
              type="button"
              onClick={() => {
                setStep("Login");
              }}
            >
              Login
            </button>
          </DialogDescription>
        </DialogFooter>
      </form>
    </>
  );
};

export default SignupForm;
