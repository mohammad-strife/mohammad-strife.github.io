import useGetTickets from "@/hooks/useGetTickets";
import Ticket from "./Ticket";

const Tickets = () => {
  // const { loading, tickets } = useGetTickets();
  return (
    <div className="h-screen">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default Tickets;
