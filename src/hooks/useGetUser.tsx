import { toast } from "@/hooks/use-toast";
import axios from "@/api/axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const UseGetUser = () => {
  const [user, setUser]: any = useState({});
  const { userInfo } = useSelector((state: any) => state.auth);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get("/profile", {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        const profile = result.data.data.user;
        setUser(profile);
        console.log(result.data.data);
      } catch (error) {
        toast({
          variant: "destructive",
          description: "مشکلی در دریافت اطلاعات پیش آمده",
        });
      }
    };
    fetchUser();
  }, []);
  return { user };
};

export default UseGetUser;
