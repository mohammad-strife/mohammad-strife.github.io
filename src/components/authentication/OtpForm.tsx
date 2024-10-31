import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import axios from "@/api/axios";
import { setCredentials } from "@/app/slices/authSlice";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { FiClock } from "react-icons/fi";
import { useToast } from "@/hooks/use-toast";

const OtpForm = ({ mobile, setStep }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otpCode, setOtpCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);
  const { toast } = useToast();

  useEffect(() => {
    if (timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const { userInfo } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const otpForm = async () => {
    try {
      if (otpCode.length == 4) {
        const data = { code: otpCode, mobile };
        const response = await axios.post(
          "/verify_sms_code",
          JSON.stringify(data),
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        dispatch(setCredentials({ ...response.data.data }));
        toast({
          description: "ورورد با موفقیت انجام شد",
        });
      } else {
        toast({
          description: "کد وارد شده باید 4 رقم باشد",
        });
      }
    } catch (err: any) {
      console.log(err);
      toast({
        description: "کد واردکد وارد شده اشتباه است",
      });
    }
  };
  const sendSms = async () => {
    try {
      const data = { code: otpCode, mobile };
      await axios.post("/send_sms", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
      setTimeLeft(120);
    } catch (error) {
      console.log({ message: "لطفا دقایقی بعد امتحان کنید" });
    }
  };

  return (
    <>
      <DialogHeader className="mb-14 px-4">
        <DialogTitle className="text-center text-4xl font-light mt-20 mb-14">
          کد تایید
        </DialogTitle>
        <DialogTitle className="font-light">
          کد تایید برای شماره {mobile} پیامک شده است
        </DialogTitle>
      </DialogHeader>
      <InputOTP
        onChange={(e) => {
          setOtpCode(e);
        }}
        maxLength={4}
      >
        <InputOTPGroup className="mx-auto gap-2" id="otp" dir="ltr">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTPGroup>
      </InputOTP>
      <div className="flex items-center gap-1 px-16">
        {timeLeft ? (
          <>
            <FiClock className="text-clock" />
            <small>{timeLeft || ""}</small>
          </>
        ) : (
          <button type="button" onClick={() => sendSms()}>
            ارسال مجدد پیامک
          </button>
        )}
        <small className="mb-1">
          {timeLeft ? "ثانیه تا دریافت مجدد کد" : ""}
        </small>
      </div>
      <button
        id="nextStep"
        type="submit"
        className="bg-btnOrange rounded-lg p-2 m-auto w-1/2 mt-10 text-white"
        onClick={otpForm}
      >
        تایید
      </button>

      <small className="mb-10 mt-5 text-center underline">
        <button type="button" onClick={() => setStep("Register")}>
          ویرایش شماره موبایل
        </button>
      </small>
    </>
  );
};

export default OtpForm;
