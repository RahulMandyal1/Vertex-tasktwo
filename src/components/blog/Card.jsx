import React from "react";
import "./card.css";
import { BiCommentDetail } from "react-icons/bi";

function Card({
  width,
  altText,
  articleTitle,
  date,
  articleUser,
  articleLink,
  commentsCount,
  articleImageUrl,
}) {
  return (
    <article className={`article-container ${width}`}>
      <figure className="image-container">
        <img src={articleImageUrl} className="article-image" alt={altText} />
      </figure>
      <div className="article-info">
        <div className="date-and-user">
          <span>{date}</span>
          <span className="article-user">{articleUser}</span>
        </div>
        <p className="article-title">{articleTitle}</p>
        <div className="flex-row-center tertiary-btn">
          <button className="tertiary-btn">Read more</button>
          <div className="flex-row-center">
            <BiCommentDetail color="gray" size={20} />
            <span className="comment-count">{commentsCount}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
