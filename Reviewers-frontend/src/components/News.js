import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

const News = (props)=>{

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    window.scroll(0,0);
    const url = `http://localhost:5001/newsData`;
    setLoading(true);
    let data = await fetch(url);
    data = await data.json();
    setArticles(data);    
    setLoading(false);
    console.log(data);
  }

  return (
    <>
      {/* headline */}
      <div className="container my-3">
        <div className="text-center headline">
          {/* <h1>{props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h1> */}
          <h1>News for you</h1>
        </div>
        {/* spinner */}
        {loading && <Loading />}
        <div className="row">
          {/* news items mapping */}
          {!loading && 
            articles.map((items, _id) => (
              <div className="col-md-4 col-sm-6 col-xs-12" key={_id}>
                <NewsItem
                  // imageURL={
                  //   items.urlToImage
                  //     ? items.urlToImage
                  //     : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/120px-No_image_available.svg.png"
                  // }
                  // newsURL={items.url}
                  obj_id={(items._id)}
                  walletAccountAddress={props.walletAccountAddress}
                  title={(items.newsTitle? items.newsTitle.slice(0,45) : "") + "..."}
                  description={(items.newsContent? items.newsContent.slice(0,150) : "") + "..."}
                />
              </div>
            ))}
        </div>
      </div>
      
    </>
  );
};



export default News;
