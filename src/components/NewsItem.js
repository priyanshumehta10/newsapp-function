import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://c.ndtvimg.com/2020-01/r48cdo8o_office-generic-woman-working-generic_625x300_09_January_20.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}...{" "}
            <span className="badge rounded-pill text-bg-success">New</span>
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
          </p>
          <a href={newsUrl} target="-blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
