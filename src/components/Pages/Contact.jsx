import React from "react";
import "../../styles/contact.css";
import { MdPermContactCalendar } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { RiTimeFill } from "react-icons/ri";
const Contact = () => {
  return (
    <div className="contact">
      <div className="chead">
        <p>GET 24/7 SUPPORT</p>
        <h1> Contact us</h1>
      </div>
      <section className="contactContent">
        <div className="address">
          <div className="adressIc cIcons">
            <div>
              <span>
                <FaMapMarkedAlt />
              </span>
              <h5>Shop Address</h5>
            </div>
            <p>34/8, East Hukupara Gifirtok, Sadan. Country Name</p>
          </div>
          <div className="timeIc cIcons">
            <div>
              <span>
                <RiTimeFill />
              </span>
              <h5>Shop Hours</h5>
            </div>
            <p>MON - FRIDAY: 8 to 9 PM SAT - SUN: 10 to 8 PM</p>
          </div>
          <div className="phoneIc cIcons">
            <div>
              <span>
                <MdPermContactCalendar />
              </span>
              <h5>Contact</h5>
            </div>
            <p>Phone: +00 111 222 3333 Email: support@fruitkha.com</p>
          </div>
        </div>
        <div className="form">
          <div className="formtxt">
            <h2>Have you any question?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo
              alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore,
              esse natus!
            </p>
          </div>
          <form action="">
            <div className="nameEmail form-grp">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="phoneSubject form-grp">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
            </div>
            <div className="message form-grp">
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                placeholder="Message"></textarea>
            </div>
            <div className="submitHolder form-grp">
              <input type="submit" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
