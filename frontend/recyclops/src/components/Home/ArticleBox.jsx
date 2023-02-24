import React, { useState } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { getHumanDate } from "../../utils/getHumanDate";
const ArticleBox = ({ article, key }) => {
  const [showBookMark, setShowBookMark] = useState(false);
  const handleOption = (e) => {
    e.stopPropagation();
    setShowBookMark((prev) => !prev);
  };

  return (
    <div
      key={key}
      className="relative mb-3 flex justify-evenly gap-5 rounded-lg border-[1.5px] border-solid bg-yellowPrimary bg-opacity-50 p-5 drop-shadow-md"
      onClick={() => window.open(article.articleUrl, "_blank")}
    >
      <div>
        <h2 className="text-2xl">{article.title}</h2>
        <p className="text-xl text-greenPrimary">
          {getHumanDate(article.published.seconds)}
        </p>
      </div>
      <div className="flex flex-col items-end justify-around">
        <img src={article.imageUrl} alt="scan image" className="h-16 w-full" />

        <button className="text-xl text-greenPrimary" onClick={handleOption}>
          {showBookMark ? <BsFillBookmarkFill /> : <BsBookmark />}
        </button>
      </div>
    </div>
  );
};

ArticleBox.propTypes = {
  article: PropTypes.object,
  key: PropTypes.number,
};

export default ArticleBox;
