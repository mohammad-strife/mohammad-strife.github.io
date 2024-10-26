import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "@/api/axios";

const useGetTickets = () => {
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState(null);

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
        if (result.data.data.length == 0) {
          toast.error("هیچ تیکتی یافت نشد");
          return;
        }
        setTicket(result.data.data);
      } catch (error: any) {
        toast.error("لطفا دقایقی بعد امتحان کنید");
      } finally {
        setLoading(false);
      }
    };
    getTickets();
  }, [userInfo.token]);
  useEffect(() => {
    // if (ticket !== null) {
    //   console.log("updated ticket: ", ticket);
    // }
  }, [ticket]);
  return { loading, ticket };
};

export default useGetTickets;
