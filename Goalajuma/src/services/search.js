import { instance } from "./index";

export const search = (categoryData, query, pageParam) => {
  const { sort, content } = categoryData;
  return instance.get(
    `/votes/search?sort=${sort}&key=${query}&category=${content}&page=${pageParam}`
  );
};
