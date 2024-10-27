import useGetTickets from "@/hooks/useGetTickets";
import Ticket from "./Ticket";
import Spinner from "../Spinner";

const Tickets = () => {
  const { loading, ticket }: any = useGetTickets();
  console.log(ticket);
  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="h-screen min-w-[500px]">
          {ticket.map((ticket: any) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      )}
    </>
  );
};

export default Tickets;
