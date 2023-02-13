import "../../styles/about.css";
import { TbTruckDelivery } from "react-icons/tb";
import { GiPriceTag } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
const About = () => {
  return (
    <section>
      <section className="about">
        <section className="aboutTitle">
          <p>WE SALE FRESH FRUITS</p>
          <h2> About Us </h2>
        </section>
        <section className="aContent">
          <section className="details">
            <h1>
              Why <span className="fr">Fruitkha</span>
            </h1>
            <section className="atextes">
              <section>
                <article>
                  <section className="aicon">
                    <TbTruckDelivery />
                  </section>
                  <section className="atxt">
                    <h3>Home Delivery</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </section>
                </article>
                <article>
                  <section className="aicon">
                    <GiPriceTag />
                  </section>
                  <section className="atxt">
                    <h3>Best Price</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </section>
                </article>
              </section>
              <section>
                <article>
                  <section className="aicon">
                    <FaBoxOpen />
                  </section>
                  <section className="atxt">
                    <h3>Custom Box</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </section>
                </article>
                <article>
                  <section className="aicon">
                    <TfiReload />
                  </section>
                  <section className="atxt">
                    <h3>Quick Refund</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam
                      rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </section>
                </article>
              </section>
            </section>
          </section>
          <section className="pic">
            <img src="../../Images/abt.jpg" alt="about" />
          </section>
        </section>
      </section>
      <section className="teamSection">
        <section className="teamHea">
          <h1>
            Our <span className="fr">Team</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            fuga quas itaque eveniet beatae optio.
          </p>
        </section>
        <section className="team">
          <div className="member team-one">
            <img src="../../Images/team/team-1.jpg" alt="jimmy_Doe" />
            <div className="social"></div>
            <p className="name">Jimmy Doe</p>
            <p className="job"> Farmer</p>
          </div>
          <div className="member team-two">
            <img src="../../Images/team/team-2.jpg" alt="Marry_Doe" />
            <div className="social"></div>
            <p className="name">Marry Doe</p>
            <p className="job"> Farmer</p>
          </div>
          <div className="member team-three">
            <img src="../../Images/team/team-3.jpg" alt="Simon_Joe" />
            <div className="social"></div>
            <p className="name">Simon Joe</p>
            <p className="job"> Farmer</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default About;
