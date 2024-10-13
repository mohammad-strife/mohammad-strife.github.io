import axios from "@/api/axios";

const useArticleLoader = async ({ params }:any) => {
  const res: any = await axios.get(`/article/${params.id}`);
  const data = await res.json();
  return data;
};

export default useArticleLoader;
