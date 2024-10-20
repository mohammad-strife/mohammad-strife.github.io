import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Articles from "../articles/Articles";

const TabList = () => {
  return (
    <Tabs defaultValue="published" className="mx-auto" dir="rtl">
      <div className="grid grid-cols-12 border-b-2 pb-6">
        <p className="col-span-4 text-4xl text-center">تجربیات منتشر شده من</p>
        <TabsList className="col-span-8 grid grid-cols-3 h-14 border">
          <TabsTrigger className="p-3" value="release_queue">
            در صف انتشار
          </TabsTrigger>
          <TabsTrigger className="p-3" value="timed">
            زمان بندی شده
          </TabsTrigger>
          <TabsTrigger className="p-3" value="published">
            منتشر شده ها
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="published">
        <Card>
          <CardContent className="">
            <Articles />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="timed">
        <Card>
          <CardContent className="">
            <Articles />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="release_queue">
        <Card>
          <CardContent className="">
            <Articles />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabList;
