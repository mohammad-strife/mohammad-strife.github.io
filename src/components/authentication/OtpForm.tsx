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
import { toast } from "react-toastify";
import { FiClock } from "react-icons/fi";

const OtpForm = ({ mobile }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otpCode, setOtpCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);

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
        console.log(JSON.stringify(data));
        const response = await axios.post(
          "/verify_sms_code",
          JSON.stringify(data),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log({ ...response }, "response");
        dispatch(setCredentials({ ...response }));
        toast.success("ورود با موفقیت انجام شد");
      } else {
        toast.error("کد وارد شده باید 4 رقم باشد");
      }
    } catch (err: any) {
      console.log(err);
      toast.error("کد وارد شده اشتباه است");
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
          <button>ارسال مجدد پیامک</button>
        )}
        <small className="mb-1">
          {timeLeft ? "ثانیه تا دریافت مجدد کد" : "ارسال مجدد کد"}
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
        ویرایش شماره موبایل
      </small>
    </>
  );
};

export default OtpForm;
