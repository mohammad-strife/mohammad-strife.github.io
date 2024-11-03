import useGetTickets from "@/hooks/useGetTickets";
import Ticket from "./Ticket";
import Spinner from "../Spinner";

const Tickets = () => {
  const { loading, tickets }: any = useGetTickets();
  console.log(tickets);

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="h-screen min-w-[500px]">
          {tickets && Array.isArray(tickets) && tickets.length > 0 ? (
            tickets.map((ticket: any) => (
              <Ticket key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <p className="flex items-center h-full justify-center animate-pulse text-2xl">
              تیکتی برای نمایش وجود نداره
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Tickets;
