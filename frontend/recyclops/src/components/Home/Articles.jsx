import React, { useState } from "react";
import PropTypes from "prop-types";
import { SlOptions } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const Articles = ({ articles, articleTitles }) => {
  const optionsList = [
    { title: "Add Favourite", icon: <AiOutlineHeart /> },
    {
      title: "Not Interested",
      icon: <MdOutlineCancel />,
    },
  ];
  const [showOption, setShowOption] = useState(false);
  const handleOption = () => {
    setShowOption((prev) => !prev);
  };
  const options = optionsList.map((option, i) => (
    <div key={i} className="flex w-full border-2 border-greenPrimary text-sm">
      <p>{option.title}</p>
      {option.icon}
    </div>
  ));
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
      <div className="flex flex-col items-end justify-around">
        {showOption && <div>{options}</div>}
        <img src={article.img} alt="scan image" className="h-16 w-full" />
        <button className="text-greenPrimary" onClick={handleOption}>
          <SlOptions />
        </button>
      </div>
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
