import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  DialogFooter,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "@/api/axios";
import { Button } from "../ui/button";
import safarCo from "@/assets/images/main-logo.png";
import { useToast } from "@/hooks/use-toast";

const UserSchema = z.object({
  mobile: z.string().min(11, {
    message: "شماره همراه حداقل باید 11 عدد باشد",
  }),
});

type FormFields = z.infer<typeof UserSchema>;

const SignupForm = ({ setStep, setMobile }: any) => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await axios.post("/send_sms", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });

      setMobile(data.mobile);
      UserSchema.safeParse(data).success && setStep("Otp");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "لطفا دقایقی بعد امتحان کنید",
      });
    }
  };

  return (
    <>
      <div className="mx-auto">
        <img src={safarCo} alt="" />
      </div>
      <DialogHeader>
        <p className="text-center text-2xl my-4">ورود | ثبت نام</p>
      </DialogHeader>
      <DialogDescription>
        <p>سلام!</p>
        شماره موبایل خود را وارد کنید
      </DialogDescription>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 my-2">
          <div className="grid grid-cols-1 gap-4">
            <Input
              {...register("mobile")}
              id="phone"
              className="col-span-3 focus-visible:border-shadowInputs text-center tracking-wide text-gray-800 text-lg"
            />
          </div>
          {errors.mobile && (
            <div className="text-red-500 text-right">
              {errors.mobile.message}
            </div>
          )}
        </div>
        <DialogFooter className="grid grid-cols-1">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-1/2 mx-auto mt-10 bg-btnApp text-white"
          >
            {isSubmitting ? "در حال ارسال" : "ورود"}
          </Button>
        </DialogFooter>
      </form>
    </>
  );
};

export default SignupForm;
