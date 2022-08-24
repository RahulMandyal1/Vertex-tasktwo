import React from "react";
import "./card.css";

function Card({
  width,
  altText,
  userImage,
  userQuote,
  userProfession,
  userName,
}) {
  return (
    <div className={`card-container ${width}`}>
      <img src={userImage} className="user-image" alt={altText} />
      <blockquote>{userQuote}</blockquote>
      <h3 className="user-name">{userName}</h3>
      <h5 className="user-profession">{userProfession}</h5>
    </div>
  );
}

export default Card;
