import React from "react";
import { fetchNews } from "../lib/fetchNews";
import { categories } from "./../constants";
import NewsList from "./NewsList";

const Homepage = async () => {
  //fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default Homepage;
