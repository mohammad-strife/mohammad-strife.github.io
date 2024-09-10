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
import Signup from "./signup/Signup";
import RecoveryPassword from "./RecoveryPassword";

const Login = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-gray-500 h-1/2 hover:bg-white bg-white font-bold">
          ورود
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">ورود به حساب کاربری</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Label htmlFor="name" className="text-right font-bold">
            رمز عبور
          </Label>
          <div className="grid grid-cols-1 gap-4">
            <Input
              id="name"
              className="col-span-3 focus-visible:ring-offset-0 focus-visible:ring-blue-400 text-right"
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>
          <RecoveryPassword />
        </div>
        <DialogFooter className="w-full grid grid-cols-1">
          <Button
            className="bg-btnOrange hover:bg-btnOrange w-1/2 mx-auto block"
            type="submit"
          >
            ورود
          </Button>
          <DialogDescription className="text-center my-2">
            <p>حساب کاربری ندارید؟</p>
            <Signup isHome={false} />
          </DialogDescription>
          <DialogDescription className="text-center"></DialogDescription>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
