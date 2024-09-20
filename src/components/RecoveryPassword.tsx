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

const RecoveryPassword = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-red-500 h-1/2 hover:bg-white bg-white font-bold underline decoration-red-500 justify-end p-0">
          <small> رمز عبور خود را فراموش کرده ام </small>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
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
              className="col-span-3 focus-visible:ring-offset-0 focus-visible:ring-blue-400 text-right"
              placeholder="مثلا ۰۹۱۹۰۵۱۳۴۳۳"
            />
          </div>
          <div className="w-full">
            <small className="text-red-500 text-right w-1/2 inline-block">
              راهنما:شماره موبایلی که قبلا با آن ثبت نام کرده اید را وارد کنید
            </small>
          </div>
        </div>
        <DialogFooter className="w-full grid grid-cols-1">
          <Button
            className="bg-btnOrange hover:bg-btnOrange w-1/2 mx-auto text-black"
            type="submit"
          >
            ادامه
          </Button>
          <DialogDescription className="text-center my-2">
            <p className="p-0 m-0">حساب کاربری ندارید؟</p>
          </DialogDescription>
          <DialogDescription className="text-center"></DialogDescription>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RecoveryPassword;
