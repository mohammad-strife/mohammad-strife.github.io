import useGetTickets from "@/hooks/useGetTickets";
import Ticket from "./Ticket";
import Spinner from "../Spinner";

const Tickets = () => {
  const { loading, tickets } = useGetTickets();
  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="h-screen">
          <Ticket />
        </div>
      )}
    </>
  );
};

export default Tickets;
