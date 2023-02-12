import React from "react";
import { BsFillPersonFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/article.css";
const Article = ({ id, title, img, date, admin, content }) => {
  return (
    <div className="articles">
      <div className="aHead">
        <p>READ THE DETAILS</p>
        <h1> {title} </h1>
      </div>
      <Link className="backBtn" to="/news">
        Back
      </Link>
      <section className="articleContent">
        <div className="articleimg">
          <img src={img} alt="article img" />
        </div>
        <div className="articleTxt">
          <p className="cardIcons">
            <span>
              <BsFillPersonFill /> {admin}
            </span>
            <span>
              <BsFillCalendarCheckFill />
              {date}
            </span>
          </p>
          <p className="content">{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Article;
