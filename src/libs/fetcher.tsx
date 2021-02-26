import { CDN_URL } from "src/constants";
import { FeedItem } from "src/types/FeedItem";

export const generateEndPoint = (type: string, page: number): string =>
  `${CDN_URL}${type}/${page}.json`;

export const getTableInfo = async (endpoint: string): Promise<FeedItem[]> => {
  const response = await fetch(endpoint, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return await response.json();
};

export const getKey = (
  type: string,
  pageIndex: number,
  previousPageData: FeedItem[] | null
): string | null => {
  if (previousPageData && !previousPageData.length) return null;
  if (pageIndex === 0) return generateEndPoint(type, 1);
  return generateEndPoint(type, pageIndex);
};
