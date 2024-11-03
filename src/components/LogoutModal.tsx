import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import sad from "@/assets/images/sad.png";
import { useDispatch } from "react-redux";
import { logout } from "@/app/slices/authSlice";
import { useToast } from "@/hooks/use-toast";

const LogoutModal = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    toast({
      variant: "destructive",
      description: "از حساب خارج شدید",
    });
  };
  return (
    <Dialog>
      <DialogTrigger className="w-full text-right">
        خروج از حساب کاربری
      </DialogTrigger>
      <DialogContent className="w-3/12">
        <DialogHeader className="gap-5">
          <img src={sad} alt="" className="w-3/6 mx-auto my-10" />
          <p className="text-2xl w-4/6 mx-auto text-center">
            واقعا از حساب کاربری خودت میخوای خارج بشی؟
          </p>
        </DialogHeader>
        <DialogFooter className="sm:justify-evenly mt-14">
          <DialogClose className="w-1/3 bg-btnOrange rounded-md">
            <Button type="button" className="hover:bg-btnOrange">
              خیر
            </Button>
          </DialogClose>
          <Button
            type="button"
            className="w-1/3 border"
            variant="ghost"
            onClick={() => logoutHandler()}
          >
            بله
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModal;
