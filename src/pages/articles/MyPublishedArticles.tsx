import TabList from "@/components/menu/TabList";

const MyPublishedArticles = () => {
  return (
    <section className="container mx-auto">
      <div className="shadow-2xl rounded-lg border p-5 my-10">
        <div className="">
          <TabList />
        </div>
      </div>
    </section>
  );
};

export default MyPublishedArticles;
