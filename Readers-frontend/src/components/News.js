import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

// function News(props) {
//   const [loading, setLoading] = useState(false);
//   const [articles, setArticles] = useState([]);
//   const [pg, setPg] = useState(1);
//   const [totalArticles, setTotalArticles] = useState(0);

//   const handleNext = async () => {
//     // window.scrollTo(0, 0);
//     // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f59178ab70df48bc83797911eebc20d9&page=${
//     //   pg + 1
//     // }&pageSize=${props.pageSize}`;
//     // setLoading(true);
//     // const data = await fetch(url);
//     // const parsedData = await data.json();
//     // setPg(pg + 1);
//     // setArticles(parsedData.articles);
//     // setLoading(false);
//     console.log("Next button is clicked");
//   };

//   const handlePrevious = async () => {
//     // window.scrollTo(0, 0);
//     // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f59178ab70df48bc83797911eebc20d9&page=${
//     //   pg - 1
//     // }&pageSize=${props.pageSize}`;
//     // setLoading(true);
//     // const data = await fetch(url);
//     // const parsedData = await data.json();
//     // setPg(pg - 1);
//     // setArticles(parsedData.articles);
//     // setLoading(false);
//     console.log("Previous button is clicked");
//   };

//   useEffect(() => {
//     const fetchNews = async () => {
//       // window.scrollTo(0, 0);
//       // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f59178ab70df48bc83797911eebc20d9&page=1&pageSize=${props.pageSize}`;

//       // setLoading(true);
//       // const data = await fetch(url, {method:"GET", mode:"cors", headers: {
//       //   "Content-Type": "application/json",        
//       // },});
//       // const parsedData = await data.json();

//       // setArticles(parsedData.articles);
//       // setTotalArticles(parsedData.totalResults);
//       // setLoading(false);


//       const url = `http://localhost:5001/newsData`;
//       const data = await fetch(url);
//       const parsedData = await data.json();

//       console.log(parsedData);
//       setArticles(parsedData.articles);
//       setTotalArticles(parsedData.totalResults);

//     };

//     fetchNews();
//     // }, [props.country, props.category, props.pageSize]);
//   },);

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [pg, setPg] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const url = `http://localhost:5001/newsData`;
    setLoading(true);
    let data = await fetch(url);
    data = await data.json();
    setArticles(data);
    setLoading(false);
    console.log(data);
  }

  const handleNext = async()=>{
    console.log("Next button got clicked");
  }

  const handlePrevious = async()=>{
    console.log("Previous button got clicked");
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
                  // title={(items.title ? items.title.slice(0, 45) : "") + ".."}
                  // description={(items.description ? items.description.slice(0, 150) : "") + "..."}
                  // imageURL={
                  //   items.urlToImage
                  //     ? items.urlToImage
                  //     : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/120px-No_image_available.svg.png"
                  // }
                  // newsURL={items.url}
                  title={(items.newsTitle)}
                  description={(items.newsContent)}
                />
              </div>
            ))}
        </div>
      </div>
      {/* previous pgno. and next buttons */}
      <div className="container-fluid page-button my-4 mx-2">
        <button
          // disabled={pg <= 1}
          className="btn-sm btn btn-color mx-5"
          onClick={handlePrevious}
        >
          {/* Left long arrow */}
          &#10232;
        </button>
        <div className="page-count">
          {/* {pg} */}
          </div>
        <button
          // disabled={!(pg + 1 <= Math.ceil(totalArticles / 12))}
          className="btn-sm btn btn-color mx-5"
          onClick={handleNext}
        >
          {/* Right long arrow */}
          &#10233;
        </button>
      </div>
    </>
  );
}

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };

// News.defaultProps = {
//   country: "in",
//   pageSize: 8,
//   category: "science",
// };

export default News;
