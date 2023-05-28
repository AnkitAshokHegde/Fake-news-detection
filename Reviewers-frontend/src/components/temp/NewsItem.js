import React, { Component } from "react";
import verified from "./verified.jpg";
import unverified from "./unverified.jpg";
import verifiedFake from "./verified_fake.jpg";
import newsJson from "./news-jason.json";

export class NewsItem extends Component {

  

  render() {
    return (
      <div className="my-3">
        <div className="card">
          <img
            className="card-img-top image-select-news"
            src={this.props.imageURL}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}               
            </h5>            
            <p className="card-text">{this.props.description}</p>
            <div className="d-flex justify-content-around">
            <a href={this.props.newsURL} target="_blank" className="btn btn-sm btn-primary">
              Read more
            </a>
            <a href="#" target="_blank" className="ml-4 btn btn-sm btn-danger">
              Vote
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
