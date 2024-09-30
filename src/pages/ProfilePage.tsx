import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import linkdin from "../assets/images/LinkedIn_icon_circle.svg.png";
import SidebarMenu from "../components/SidebarMenu";


const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState({});


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get("/auth/profile");
        // setUserProfile
      } catch (error) {}
    };
  });
  return (
    <section className="container mx-auto mb-32">
      <p className="text-right w-[1140px] mx-auto text-gray-500">
        صفحه اصلی پروفایل کاربری
      </p>
      <div className="mt-16 flex justify-center">
        <Card className="w-[340px]">
          <CardHeader>
            <img src={linkdin} alt="" className="size-16 mx-auto" />
            <p className="text-center text-white">محمد زارعی</p>
          </CardHeader>
          <CardContent>
            <form className="text-right">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username" className="text-white">
                    نام و نام خانوادگی
                  </Label>
                  <Input id="username" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="cellphone" className="text-white">
                    شماره موبایل
                  </Label>
                  <Input id="cellphone" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password" className="text-white">
                    رمز عبور
                  </Label>
                  <Input id="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-around">
            <Button className="w-24">ذخیره تغییرات</Button>
            <Button className="bg-gray-400 w-24">انصراف</Button>
          </CardFooter>
        </Card>
        <div className="absolute right-60">
          <SidebarMenu />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
