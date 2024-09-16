import { z } from "zod";
import { Button } from "@/components/ui/button";
import axios from "../api/axios";

import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Signup from "./Signup";
import RecoveryPassword from "./RecoveryPassword";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTrigger } from "@radix-ui/react-dialog";
import SignupForm from "./SignupForm";

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
        <DialogTitle className="text-center">ورود به حساب کاربری</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <Label htmlFor="cellphone" className="text-right font-bold">
            شماره موبایل
          </Label>
          <div className="grid grid-cols-1 gap-4">
            <Input
              {...register("cellphone")}
              id="cellphone"
              className="col-span-3 focus-visible:ring-offset-0 focus-visible:ring-blue-400 text-right"
              placeholder="رمز عبور خود را وارد کنید"
            />
            {errors.cellphone && (
              <div className="text-red-500">{errors.cellphone.message}</div>
            )}
          </div>
          <RecoveryPassword />
        </div>
        <DialogFooter className="w-full grid grid-cols-1">
          <Button
            className="bg-btnOrange hover:bg-btnOrange w-1/2 mx-auto block"
            type="submit"
          >
            ورود
          </Button>
          <DialogDescription className="text-center my-2">
            <p>حساب کاربری ندارید؟</p>
            <button
              type="button"
              onClick={() => {
                setStep("Register");
              }}
            >
              Reister
            </button>

            {/* <SignupForm /> */}
          </DialogDescription>
        </DialogFooter>
      </form>
    </>
  );
};

export default LoginForm;
