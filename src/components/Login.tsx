import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { useState } from "react";
import LoginForm from "./LoginForm";
import OtpForm from "./OtpForm";

const Login = ({ setStep }: any) => {
  // const [step, setStep] = useState(1);

  // const onClose = (e: any) => {
  //   if (e === false) {
  //     setStep(1);
  //   }
  // };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="text-gray-500 h-1/2 hover:bg-white bg-white font-bold"
          onClick={() => setStep("Login")}
        >
          ورود
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};

export default Login;
