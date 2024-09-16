import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { useState } from "react";
import SignupForm from "./SignupForm";
import OtpForm from "./OtpForm";

const Signup = ({ isHome = true }) => {
  const [step, setStep] = useState(1);
  function onClose(e: any) {
    if (e === false) {
      setStep(1);
    }
  }
  return (
    <Dialog onOpenChange={onClose}>
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
        {(step == 1 && <SignupForm setStep={setStep} />) ||
          (step == 2 && <OtpForm />)}
      </DialogContent>
    </Dialog>
  );
};

export default Signup;
