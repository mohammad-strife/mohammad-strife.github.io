import { useEffect, useState } from "react";
import axios from "../api/axios";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    <section className="container w-4/6 mx-auto mt-12">
      <Card className="w-[350px] mx-auto">
        <CardHeader>
                <img src="" alt="" />
          <CardTitle>Create project</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="text-right">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">نام و نام خانوادگی</Label>
                <Input id="username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cellphone">شماره موبایل</Label>
                <Input id="cellphone" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">رمز عبور</Label>
                <Input id="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default ProfilePage;
