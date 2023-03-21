import React, { useState, useEffect, useContext } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { UserContext } from "../../Context/UserProvider";
import { getHumanDate } from "../../utils/getHumanDate";
import {
  saveArticle,
  removeArticle,

  //   savedArticles,
  readingHistory,
} from "../../APIs/Article";
import toast from "react-hot-toast";

const ArticleBox = ({
  article,
  id,
  bookmarked,
  loading,
  savedArticles = [],
  hideBookmark = false,
}) => {
  const saveToast = (id) =>
    toast.success("Article saved", {
      id: id,
    });
  const deleteToast = (id) =>
    toast.error("Article removed", {
      id: id,
    });
  const failToast = (id) =>
    toast.error("Some error happend, please try again", {
      id: id,
    });
  const loginToast = (id) =>
    toast("Please login to save articles", {
      id: id,
    });

  const [showBookMark, setShowBookMark] = useState(bookmarked);
  // eslint-disable-next-line no-unused-vars
  const user = useContext(UserContext);
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(user);
  //   console.log(currentUser);
  const handleOption = (e, id) => {
    e.stopPropagation();
    if (user != null) {
      if (!showBookMark) {
        setShowBookMark((prev) => !prev);
        saveArticle(user.uid, id).then((res) => {
          if (res) {
            saveToast(id);
          } else {
            failToast(id);
          }
        });
        const savedArticles = JSON.parse(
          window.sessionStorage.getItem("savedArticles")
        );
        window.sessionStorage.setItem(
          "savedArticles",
          JSON.stringify([...savedArticles, id])
        );
      } else {
        setShowBookMark((prev) => !prev);
        removeArticle(user.uid, id).then((res) => {
          if (res) {
            deleteToast(id);
          } else {
            failToast(id);
          }
        });
        const articles = JSON.parse(
          window.sessionStorage.getItem("savedArticles")
        );
        const index = articles.indexOf(id);
        articles.splice(index, 1);
        window.sessionStorage.setItem(
          "savedArticles",
          JSON.stringify([...articles])
        );
      }
    } else {
      loginToast(id);
      //   alert("Login to save article");
    }
  };
  const handleOnClick = (e) => {
    e.stopPropagation();
    window.open(article.articleUrl, "_blank");
    if (user != null) {
      readingHistory(user.uid, id);
    }
  };
  useEffect(() => {
    if (bookmarked) setShowBookMark(true);
    // const getSavedArticles = async () => {
    //   //   console.log("here");
    //   if (articleIds.indexOf(id) > -1) {
    //     console.log("here");
    //     setShowBookMark(true);
    //   }
    // };
    // if (user != null) {
    //   getSavedArticles();
    // } else {
    //   window.sessionStorage.setItem("savedArticles", JSON.stringify([]));
    // }
  }, [bookmarked]);
  useEffect(() => {
    window.sessionStorage.setItem(
      "savedArticles",
      JSON.stringify([...savedArticles])
    );
  }, []);
  console.log(article);
  return (
    <div
      key={id}
      className={`${
        loading ? "animate-pulse" : ""
      }  relative mb-3 min-h-[200px] rounded-2xl border-[1.5px] border-solid drop-shadow-md md:min-h-[300px] lg:min-h-[300px]`}
      onClick={handleOnClick}
    >
      <img
        src={article.imageUrl}
        alt="scan image"
        className="absolute -z-10 h-full w-full rounded-2xl object-cover blur-[0.7px]"
      />

      <div className="bg absolute bottom-0  flex  w-[100%]  justify-between gap-1 rounded-b-2xl bg-white p-2  align-middle font-dosis backdrop-sepia-0">
        <div>
          <h2 className="text-xl">{article.title}</h2>
          <p className="text-md text-black">
            {getHumanDate(article.published.seconds)}
          </p>
        </div>
        <div className="flex flex-col items-end justify-around">
          {hideBookmark ? (
            ""
          ) : (
            <button
              className="relative bottom-3 right-2 z-10 float-right text-3xl font-[1200] text-black"
              id={id}
              onClick={(e) => handleOption(e, id)}
            >
              {showBookMark ? <BsFillBookmarkFill /> : <BsBookmark />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

ArticleBox.propTypes = {
  article: PropTypes.object,
  key: PropTypes.number,
  id: PropTypes.string,
  user: PropTypes.any,
  articleIds: PropTypes.array,
  bookmarked: PropTypes.bool,
  loading: PropTypes.bool,
  savedArticles: PropTypes.array,
  hideBookmark: PropTypes.bool,
};

export default ArticleBox;
