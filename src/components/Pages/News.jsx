// import { Link } from "react-router-dom";
/* <Link to="/single-new">Read More</Link> */
import Card from "../Card";
import "../../styles/news.css";
const News = ({ datas }) => {
  return (
    <section>
      <section className="news">
        <div className="newsHead">
          <p>ORGANIC INFORMATION</p>
          <h1>News Article</h1>
        </div>
        <div className="newsArticles">
          {datas.map((data) => (
            <Card
              key={data.id}
              img={data.img}
              title={data.title}
              admin={data.admin}
              date={data.date}
              content={data.description}
              link={data.link}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default News;
