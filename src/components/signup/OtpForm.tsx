import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { OtpInput } from "./OtpInput";

export function OtpForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-btnOrange hover:bg-btnOrange text-black w-1/2 mx-auto block">
          ادامه
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mb-14">
          <DialogTitle className="text-center text-4xl font-light mt-20 mb-14">
            کد تایید
          </DialogTitle>
          <DialogTitle className="text-center font-light">
            کد ارسال شده به شماره {"0919076323"} را وارد کنید
          </DialogTitle>
        </DialogHeader>
        <OtpInput />
      </DialogContent>
    </Dialog>
  );
}
