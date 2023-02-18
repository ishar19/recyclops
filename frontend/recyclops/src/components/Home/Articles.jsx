import React from "react";
import PropTypes from "prop-types";
const Articles = ({ articles, articleTitles }) => {
  const titles = articleTitles.map((title, i) => (
    <h2
      key={i}
      className="flex-shrink-0 cursor-pointer pr-2 text-xl hover:text-[#34A853] hover:underline"
    >
      {title}
    </h2>
  ));
  const articleDisplay = articles.map((article, i) => (
    <a
      href={article.link}
      key={i}
      className="mb-3 flex gap-5 rounded-lg border-[1.5px] border-solid bg-yellowPrimary bg-opacity-50 p-3	 drop-shadow-md"
    >
      <div>
        <h2 className={`text-2xl`}>{article.title}</h2>
        <p className="text-xl text-greenPrimary">{article.date}</p>
      </div>
      <img src={article.img} alt="scan image" className="w-24" />
    </a>
  ));
  return (
    <div className="mt-10">
      <div className="flex justify-between overflow-x-scroll scrollbar-hide lg:scrollbar lg:scrollbar-track-inherit lg:scrollbar-thumb-slate-300   lg:scrollbar-default">
        {titles}
      </div>
      <div className="mt-5 flex flex-col">{articleDisplay}</div>
    </div>
  );
};
Articles.propTypes = {
  articleTitles: PropTypes.array,
  articles: PropTypes.array,
};
export default Articles;
