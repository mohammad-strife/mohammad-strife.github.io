import { Skeleton } from "@/components/ui/skeleton";

const ArticleSkeleton = () => {
  return (
    <div className="flex gap-3">
      <Skeleton className="h-40 w-52 rounded-xl" />
      <div className="flex flex-col gap-4 mt-4">
        <div className="mb-2">
          <Skeleton className="h-4 w-[180px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[450px]" />
          <Skeleton className="h-4 w-[400px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
      </div>
    </div>
  );
};

export default ArticleSkeleton;
