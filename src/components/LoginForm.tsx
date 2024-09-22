import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "../api/axios";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RecoveryPassword from "./RecoveryPassword";

const UserSchema = z.object({
  cellphone: z.string().min(11, {
    message: "شماره موبایل وارد شده صحیح نیست",
  }),
});

type FormFields = z.infer<typeof UserSchema>;
const LoginForm = ({ setStep }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await axios.post("/auth/login", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      console.log(UserSchema.safeParse(data).success);
      UserSchema.safeParse(data).success && setStep("Otp");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DialogHeader>
        <p className="text-center mt-16 text-3xl my-4">ورود به حساب کاربری</p>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <Label htmlFor="cellphone" className="text-right text-xl">
            شماره موبایل
          </Label>
          <div className="grid grid-cols-1 gap-4">
            <Input
              {...register("cellphone")}
              id="cellphone"
              className="col-span-3 focus-visible:ring-offset-0 focus-visible:ring-blue-400 text-right"
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>
          {errors.cellphone && (
            <div className="text-red-500 text-right">{errors.cellphone.message}</div>
          )}
          <button
            type="button"
            onClick={() => setStep("RecoveryPassword")}
            className="text-red-500 h-1/2 bg-white font-bold underline decoration-red-500 flex justify-end p-0"
          >
            <small> رمز عبور خود را فراموش کرده ام </small>
          </button>
        </div>
        <DialogFooter className="w-full grid grid-cols-1">
          <Button className="w-1/2 mx-auto mt-10" type="submit">
            ورود
          </Button>
          <DialogDescription className="text-center">
            <p className="mt-2">حساب کاربری ندارید؟</p>
            <button
              type="button"
              onClick={() => {
                setStep("Register");
              }}
              className="mt-2"
            >
              ثبت نام
            </button>
          </DialogDescription>
        </DialogFooter>
      </form>
    </>
  );
};

export default LoginForm;
