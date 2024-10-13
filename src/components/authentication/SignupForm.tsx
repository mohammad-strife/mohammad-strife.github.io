import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "@/api/axios";
import { Button } from "../ui/button";

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
      const response = await axios.post("/send_sms", JSON.stringify(data), {
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
        <p className="text-center mt-16 text-3xl my-4">فرم ثبت نام</p>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <Label htmlFor="name" className="text-right text-xl">
            نام و نام خانوادگی
          </Label>
          <div className="grid grid-cols-1 gap-4">
            <Input
              {...register("username")}
              id="name"
              className="col-span-3 focus-visible:border-shadowInputs"
            />
          </div>
          {errors.username && (
            <div className="text-red-500 text-right">
              {errors.username.message}
            </div>
          )}
          <Label htmlFor="phone" className="text-right text-xl">
            شماره موبایل
          </Label>
          <div className="grid grid-cols-1 gap-4">
            <Input
              {...register("cellphone")}
              id="phone"
              className="col-span-3 focus-visible:border-shadowInputs"
            />
          </div>
          {errors.cellphone && (
            <div className="text-red-500 text-right">
              {errors.cellphone.message}
            </div>
          )}
        </div>
        <DialogFooter className="grid grid-cols-1">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-1/2 mx-auto mt-10"
          >
            {isSubmitting ? "در حال ارسال" : "ادامه"}
          </Button>
          <DialogDescription className="text-center my-2">
            <p className="mt-2">قبلا ثبت نام کرده‌اید؟</p>
            <button
              type="button"
              onClick={() => {
                setStep("Login");
              }}
              className="mt-2 underline"
            >
              ورود
            </button>
          </DialogDescription>
        </DialogFooter>
      </form>
    </>
  );
};

export default SignupForm;
