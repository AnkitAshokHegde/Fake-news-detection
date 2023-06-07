import React from "react";
import verified from "./verified.jpg";
import unverified from "./unverified.jpg";
import verifiedFake from "./verified_fake.jpg";

const NewsItem = (props) => {
  return (
    <div className="my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {props.title}
            <span className="badge">
              <img className="image-select-" src={unverified} alt="Unverified" />
            </span>
          </h5>
          <p className="card-text">{props.description}</p>
          <div className="d-flex justify-content-around">
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;





{/* <img
  className="card-img-top image-select-news"
  src={props.imageURL}
  alt="Card image cap"
/> */}

{/* <a
  href={props.newsURL}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-sm btn-primary"
>
  Read more
</a> */}