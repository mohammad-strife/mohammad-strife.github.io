import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useGetTickets = () => {
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const res = await fetch("");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setTickets(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getTickets();
  }, []);
  return { loading, tickets };
};

export default useGetTickets;
