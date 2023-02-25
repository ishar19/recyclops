import React, { useState, useEffect } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { getHumanDate } from "../../utils/getHumanDate";
import {
  saveArticle,
  removeArticle,
  savedArticles,
  readingHistory,
} from "../../APIs/Article";
// import toast, { Toaster } from "react-hot-toast";

const ArticleBox = ({ article, id, user }) => {
  //   const saveToast = () => toast.success("Article saved");
  // const deleteToast = () => toast.error("Article removed");
  //   const failToast = () => toast.error("Some error happend, please try again");
  //   const loginToast = () => toast("Please login to save articles");

  const [showBookMark, setShowBookMark] = useState(false);
  console.log(showBookMark);
  const handleOption = (e, id) => {
    if (user != null) {
      console.log(id);
      e.stopPropagation();
      if (!showBookMark) {
        const savedArticles = JSON.parse(
          window.sessionStorage.getItem("savedArticles")
        );
        window.sessionStorage.setItem(
          "savedArticles",
          JSON.stringify([...savedArticles, id])
        );
        saveArticle(user.uid, id).then((res) => {
          if (res) {
            // saveToast();
            setShowBookMark((prev) => !prev);
          } else {
            // failToast();
          }
        });
      } else {
        const savedArticles = JSON.parse(
          window.sessionStorage.getItem("savedArticles")
        );
        const index = savedArticles.indexOf(id);
        savedArticles.splice(index, 1);
        window.sessionStorage.setItem(
          "savedArticles",
          JSON.stringify([...savedArticles])
        );
        removeArticle(user.uid, id).then((res) => {
          if (res) {
            // saveToast();
            setShowBookMark((prev) => !prev);
          } else {
            // failToast();
          }
        });
      }
    } else {
      //   loginToast();
    }
  };
  const handleOnClick = () => {
    window.open(article.articleUrl, "_blank");
    if (user != null) {
      readingHistory(user.uid, id);
    }
  };
  useEffect(() => {
    const getSavedArticles = async () => {
      const articleIds = await savedArticles(user.uid);
      if (articleIds.includes(id)) {
        setShowBookMark(true);
      }
      window.sessionStorage.setItem(
        "savedArticles",
        JSON.stringify([...articleIds])
      );
    };
    if (user != null) {
      getSavedArticles();
    } else {
      window.sessionStorage.setItem("savedArticles", JSON.stringify([]));
    }
  }, [user]);
  return (
    <div
      key={id}
      className="relative mb-3 flex justify-evenly gap-5 rounded-lg border-[1.5px] border-solid bg-yellowPrimary bg-opacity-50 p-5 drop-shadow-md"
      onClick={handleOnClick}
    >
      <div>
        <h2 className="text-2xl">{article.title}</h2>
        <p className="text-xl text-greenPrimary">
          {getHumanDate(article.published.seconds)}
        </p>
      </div>
      <div className="flex flex-col items-end justify-around">
        <img src={article.imageUrl} alt="scan image" className="h-16 w-full" />

        <button
          className="text-xl text-greenPrimary"
          id={id}
          onClick={(e) => handleOption(e, id)}
        >
          {showBookMark ? <BsFillBookmarkFill /> : <BsBookmark />}
        </button>
      </div>
      {/* <Toaster /> */}
    </div>
  );
};

ArticleBox.propTypes = {
  article: PropTypes.object,
  key: PropTypes.number,
  id: PropTypes.string,
  user: PropTypes.any,
};

export default ArticleBox;
