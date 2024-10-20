import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import SignupForm from "./SignupForm";
import OtpForm from "./OtpForm";

const MainForm = () => {
  const [step, setStep] = useState("Register");
  const [mobile, setMobile] = useState("");
  function onClose(e: any) {
    if (e === false) {
      setStep("Register");
    }
  }

  return (
    <Dialog onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button className="font-bold bg-btnOrange">ورود | ثبت نام</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {(step == "Register" && (
          <SignupForm setStep={setStep} setMobile={setMobile} />
        )) ||
          (step == "Otp" && <OtpForm mobile={mobile} />)}
      </DialogContent>
    </Dialog>
  );
};

export default MainForm;
