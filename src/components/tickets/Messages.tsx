import { useParams } from "react-router-dom";
import Message from "./Message";
import axios from "@/api/axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import linkedin from "../../assets/images/LinkedIn_icon_circle.svg.png";

const Messages = ({ ticket }: any) => {
  // const { id } = useParams();
  // const { userInfo } = useSelector((state: any) => state.auth);
  // const [tickets, setTickets]: any = useState([]);

  // useEffect(() => {
  //   const fetchTicket = async () => {
  //     const result = await axios.get(`get/ticket/${id}`, {
  //       headers: { authorization: `Bearer ${userInfo.token}` },
  //     });
  //     setTickets(result.data);
  //   };
  //   fetchTicket();
  // }, []);
  console.log(ticket,'sadfffff');
  return (
    <div className="h-[500px] overflow-auto">
      <Message />
    </div>
  );
};

export default Messages;
