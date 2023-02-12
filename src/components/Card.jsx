import React from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { RiArrowRightSFill } from "react-icons/ri";
const Card = ({ img, title, admin, date, content, link }) => {
  return (
    <div className="card">
      <img src={img} alt="article cover" />
      <h4> {title} </h4>
      <p className="cardIcons">
        <span>
          <BsFillPersonFill /> {admin}
        </span>
        <span>
          <BsFillCalendarCheckFill />
        </span>
        {date}
      </p>
      <p> {content} </p>
      <Link to={link}>
        Read more <RiArrowRightSFill />
      </Link>
    </div>
  );
};

export default Card;
