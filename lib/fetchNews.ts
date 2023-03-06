import sortNewsByImage from "./sortNewsByImage";

export const fetchNews = async (
  category?: Category | string,
  keyword?: string,
  isDynamic?: boolean
) => {
  console.log(category)
  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&categories=${category}&keywords=${keyword}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `API Key ${process.env.MEDIASTACK_API_KEY}`,
      },
    }
  );
  const newsResponse=await res.json();
  console.log(sortNewsByImage(newsResponse))
  return sortNewsByImage(newsResponse)
};
