import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import SignupForm from "./SignupForm";
import OtpForm from "./OtpForm";

const MainForm = () => {
  const [step, setStep] = useState("Register");

  function onClose(e: any) {
    if (e === false) {
      setStep("Register");
    }
  }

  return (
    <Dialog onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button className="text-white font-bold">ثبت نام</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {(step == "Register" && <SignupForm setStep={setStep} />) ||
          (step == "Otp" && <OtpForm />)}
      </DialogContent>
    </Dialog>
  );
};

export default MainForm;
