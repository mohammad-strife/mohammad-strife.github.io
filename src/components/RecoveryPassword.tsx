import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RecoveryPassword = ({ setStep }: any) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-center">فراموشی رمز عبور</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4 text-right">
        <Label htmlFor="name" className="text-right font-bold">
          شماره موبایل
        </Label>
        <div className="grid grid-cols-1 gap-4">
          <Input
            id="name"
            className="col-span-3  text-right"
            placeholder="مثلا ۰۹۱۲۳۴۵۶۷۸۹"
          />
        </div>
        <div className="w-full">
          <small className="text-red-500 text-right w-1/2 inline-block">
            راهنما:شماره موبایلی که قبلا با آن ثبت نام کرده اید را وارد کنید
          </small>
        </div>
      </div>
      <DialogFooter className="w-full grid grid-cols-1">
        <Button className="w-1/2 mx-auto" type="submit">
          ادامه
        </Button>
        <DialogDescription className="text-center my-2">
          <p className="my-2">حساب کاربری ندارید؟</p>
          <button type="button" onClick={() => setStep("Register")}>
            ایجاد حساب
          </button>
        </DialogDescription>
      </DialogFooter>
    </>
  );
};

export default RecoveryPassword;
