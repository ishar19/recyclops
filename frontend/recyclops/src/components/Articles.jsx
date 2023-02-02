import React from "react";
import PropTypes from "prop-types";
import { textPrimary } from "../assets/styles";
const Articles = ({ articles, articleTitles }) => {
  const titles = articleTitles.map((title, i) => (
    <h2
      key={i}
      className={`cursor-pointer text-xl hover:text-[#34A853] hover:underline`}
    >
      {title}
    </h2>
  ));
  const articleDisplay = articles.map((article, i) => (
    <a
      href={article.link}
      key={i}
      className="mx-2 mb-3 flex gap-5 rounded-lg border-[1.5px] border-solid border-[#34A853] p-3"
    >
      <div>
        <h2 className={`text-2xl`}>{article.title}</h2>
        <p className={`${textPrimary} text-xl`}>{article.date}</p>
      </div>
      <img src={article.img} alt="scan image" className="w-24" />
    </a>
  ));
  return (
    <div className="mt-10">
      <div className="flex gap-2 pl-5">{titles}</div>
      <div className="mt-5 flex flex-col">{articleDisplay}</div>
    </div>
  );
};
Articles.propTypes = {
  articleTitles: PropTypes.array,
  articles: PropTypes.array,
};
export default Articles;
