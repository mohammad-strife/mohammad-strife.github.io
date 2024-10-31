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
import ProfileMenu from "../components/menu/ProfileMenu";
import { useSelector } from "react-redux";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MobileProfileMenu from "@/components/menu/MobileProfileMenu";
import ImageUploader from "@/components/profile/ImageUploader";
import { useToast } from "@/hooks/use-toast";

const ProfileSchema = z.object({
  name: z.string().min(4, {
    message: "نام حداقل باید ۴ کارکتر باشد",
  }),
  mobile: z
    .string()
    .min(11, {
      message: "شماره همراه حداقل باید 11 عدد باشد",
    })
    .nullable(),
});

type ProfileForm = z.infer<typeof ProfileSchema>;

const ProfilePage = () => {
  const [userProfile, setUserProfile]: any = useState({});
  const [image, setImage]: any = useState<string | null>(null);
  const [url, setUrl]: any = useState();
  const [file, setFile]: any = useState();
  const [isComplete, setIsComplete] = useState({});
  const { toast } = useToast();
  const { userInfo } = useSelector((state: any) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileForm>({
    resolver: zodResolver(ProfileSchema),
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get("/profile", {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        console.log(result);
        const profile = result.data.data.user;
        if (!profile.name) {
          toast({ description: "لطفا پروفایل خود را تکمیل کنید" });
        }
        console.log(result.data.data.user.photo);
        setImage(result.data.data.user.photo);
        setUserProfile(result.data.data.user);
      } catch (error) {
        console.log(error);
        toast({
          variant: "destructive",
          description: "مشکلی در دریافت اطلاعات پیش آمده",
        });
      }
    };
    fetchUser();
  }, []);

  const onSubmit: SubmitHandler<ProfileForm> = async (data) => {
    try {
      file.append("file_path", url);
      file.append("mobile", data.mobile);
      file.append("name", data.name);

      console.log(file);
      const result = await axios.post("/update_profile", file, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      toast({ description: "اطلاعات شما با موفقیت بروز شد" });
      console.log(result);
    } catch (error) {
      toast({ description: "مشکلی در ثبت اطلاعات پیش آمده" });
    }
  };

  return (
    <section className="container mx-auto mb-32 ">
      <p className="text-gray-500 mb-16 px-3">صفحه اصلی پروفایل کاربری</p>
      <div className="grid grid-cols-12">
        <div className=" hidden md:block md:col-span-3">
          <ProfileMenu />
        </div>
        <div className="col-span-12 md:col-span-7 flex justify-center">
          <Card className="w-[340px] bg-profile_card">
            <CardHeader className="mx-auto w-full">
              <MobileProfileMenu />
              <ImageUploader
                setFile={setFile}
                setUrl={setUrl}
                image={image}
                setImage={setImage}
              />

              <p className="text-center text-white">{userProfile.name}</p>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username" className="text-white">
                      نام و نام خانوادگی
                    </Label>
                    <Input
                      id="username"
                      placeholder="نام و نام خانوادگی خود را وارد کنید"
                      {...register("name")}
                      defaultValue={userProfile.name}
                    />
                    {errors.name && (
                      <div className="text-right">{errors.name.message}</div>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="cellphone" className="text-white">
                      شماره موبایل
                    </Label>
                    <Input
                      id="cellphone"
                      defaultValue={userProfile.mobile}
                      {...register("mobile")}
                    />
                    {errors.mobile && (
                      <div className="text-right">{errors.mobile.message}</div>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around">
                <Button
                  className="w-24 bg-btnOrange"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "در حال ثبت" : "ذخیره تغییرات"}
                </Button>
                <Button className="bg-gray-400 w-24">انصراف</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
