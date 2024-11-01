import { Skeleton } from "@/components/ui/skeleton";

const SelectedArticleSkeleton = () => {
  return (
    <div className="w-full gap-10 space-y-6 p-5">
      <div className="flex gap-5 p-0 md:px-4">
        <Skeleton className="h-64 w-1/4 md:w-full rounded-xl" />
        <Skeleton className="h-64 w-full rounded-xl" />
      </div>
      <div className="flex flex-col md:flex-row gap-6 px-4">
        <Skeleton className="h-48 w-full rounded-xl" />
        <Skeleton className="h-48 w-full rounded-xl" />
        <Skeleton className="h-48 w-full rounded-xl" />
      </div>
    </div>
  );
};

export default SelectedArticleSkeleton;
