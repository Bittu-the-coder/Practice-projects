import img from "../assets/news.png";
export const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px", minHeight: "400px" }}
    >
      <img
        src={src ? src : img}
        className="card-img-top image"
        alt="..."
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 45)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 80) : "A News"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};
