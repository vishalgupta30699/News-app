import React from "react";
import { fetchNews } from "../../../lib/fetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: { category: Category };
};

const NewsCategory = async ({ params: { category } }: Props) => {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      {news.data.length !== 0 ? <NewsList news={news} /> : <p className="text-4xl text-center mt-4">No News Feed</p>}
    </div>
  );
};

export default NewsCategory;
