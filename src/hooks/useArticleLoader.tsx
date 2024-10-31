import axios from "@/api/axios";

const useArticleLoader = async ({ params }: any) => {
  const data = await axios.get(`article_details/${params.id}`);
  return data.data.data[0];
};

export default useArticleLoader;
