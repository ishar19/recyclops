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

const ArticleBox = ({ article, id, bookmarked, loading }) => {
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
            saveToast(id);
            setShowBookMark((prev) => !prev);
          } else {
            failToast(id);
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
            deleteToast(id);
            setShowBookMark((prev) => !prev);
          } else {
            failToast(id);
          }
        });
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
    //   window.sessionStorage.setItem(
    //     "savedArticles",
    //     JSON.stringify([...articleIds])
    //   );
    // };
    // if (user != null) {
    //   getSavedArticles();
    // } else {
    //   window.sessionStorage.setItem("savedArticles", JSON.stringify([]));
    // }
  }, [bookmarked]);
  //   useEffect(() => {
  //     setCurrentUser(user);
  //   }, []);
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
      <div className="flex flex-col items-end justify-around">
        <button
          className="absolute bottom-3 right-2 z-10 text-3xl font-[1200] text-black"
          id={id}
          onClick={(e) => handleOption(e, id)}
        >
          {showBookMark ? <BsFillBookmarkFill /> : <BsBookmark />}
        </button>
      </div>
      <div className="bg absolute  bottom-0 w-[100%] rounded-b-2xl bg-white pl-4 backdrop-sepia-0">
        <h2 className="text-xl">{article.title}</h2>
        <p className="text-md text-black">
          {getHumanDate(article.published.seconds)}
        </p>
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
  articleIds: PropTypes.array,
  bookmarked: PropTypes.bool,
  loading: PropTypes.bool,
};

export default ArticleBox;
