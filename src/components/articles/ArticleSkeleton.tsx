import { Skeleton } from "@/components/ui/skeleton";

const ArticleSkeleton = () => {
  return (
    <div className="flex gap-3 w-full">
      <Skeleton className="h-40 w-8/12 md:w-3/12 mx-2 rounded-xl" />
      <div className="flex flex-col gap-4 mt-4 w-full">
        <div className="mb-2">
          <Skeleton className="h-4 w-1/3 md:w-[180px]" />
        </div>
        <div className="space-y-2 ml-5">
          <Skeleton className="h-4 w-full md:w-[450px]" />
          <Skeleton className="h-4 w-3/4 md:w-[400px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/3 md:w-[80px]" />
          <Skeleton className="h-4 w-1/3 md:w-[80px]" />
        </div>
      </div>
    </div>
  );
};

export default ArticleSkeleton;
