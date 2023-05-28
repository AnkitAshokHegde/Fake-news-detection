import React from "react";

const NewsItem = (props) => {
  return (
    <div className="my-3">
      <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <div className="d-flex justify-content-around">
            {/* <a
              href={props.newsURL}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a> */}
            <button
              href="#"
              target="_blank"
              className="ml-4 btn btn-sm btn-danger"
            >
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;