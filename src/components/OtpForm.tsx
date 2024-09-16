import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useLoginMutation } from "@/state/auth/usersApiSlice";
import { setCredentials } from "@/state/auth/authSlice";
import axios from "../api/axios";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OtpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const { userInfo } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const otpForm = async () => {
    try {
      if (otp.length == 4) {
        const response = await axios.post(
          "/auth/otp",
          JSON.stringify({ otp }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        dispatch(setCredentials({ ...response }));
        setMessage("کد وارد شده صحیح می باشد");
        setError(true);
      }
    } catch (error) {
      setMessage("کد وارد شده اشتباه است");
      setError(false);
    }
  };

  return (
    <>
      <DialogHeader className="mb-14 px-4">
        <DialogTitle className="text-center text-4xl font-light mt-20 mb-14">
          کد تایید
        </DialogTitle>
        <DialogTitle className="text-right font-light">
          کد ارسال شده به شماره {"0919076323"} را وارد کنید
        </DialogTitle>
        <DialogTitle
          className={
            error ? "text-green-500 text-right" : "text-red-500 text-right"
          }
        >
          {message}
        </DialogTitle>
      </DialogHeader>
      <InputOTP
        onChange={(e) => {
          setOtp(e);
        }}
        maxLength={4}
      >
        <InputOTPGroup className="mx-auto gap-2">
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
      <button
        type="submit"
        className="bg-btnOrange rounded-lg p-2 m-auto w-1/2"
        onClick={otpForm}
      >
        ادامه
      </button>
    </>
  );
};

export default OtpForm;
