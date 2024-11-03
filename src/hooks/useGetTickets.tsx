import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "@/api/axios";
import { useToast } from "./use-toast";

const useGetTickets = () => {
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState();
  const { toast } = useToast();

  const { userInfo } = useSelector((state: any) => state.auth);

  useEffect(() => {
    const getTickets = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        var result = await axios.get("/show_ticket", {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        });

        setTickets(result.data.data);
      } catch (error) {
        toast({ description: "مشکلی در دریافت اطلاعات پیش آمده" });
      } finally {
        setLoading(false);
      }
    };
    getTickets();
  }, [userInfo.token]);
  return { loading, tickets };
};

export default useGetTickets;
