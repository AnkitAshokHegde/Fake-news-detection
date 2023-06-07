import { stringify } from "querystring";
import React, { Component } from "react";
import Loading from "./Loading";

let news_title;
let news_content;
function Publish() {

    // const handleOnSubmit = (e) => {
    //   fetch("http://localhost:5000/publish",{        
    //     body: JSON.stringify(
    //         {newsTitle:news_title,
    //         newsContent:news_content}
    //     ),
    //     method: "POST"
    //   });    
    // console.log(newsTitleValue, newsContentValue);
    // }

    const handleOnSubmit = () => {
        fetch("http://localhost:5000/publish", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({newsTitle:news_title,
                    newsContent:news_content}),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the backend
            console.log(data);
          })
          .catch((error) => {
            // Handle errors
            console.error(error);
          });
      };

    const newsTitleValue= (e) => {
        news_title=e.target.value;
    }
    const newsContentValue=(e) =>{
        news_content=e.target.value;
    }
    return (
        <>            
            <div className="container my-3">
                <div className="text-center headline">
                    <h1>Publish your Article</h1>
                </div>


                <div className="row">                    
                    <div className="col" >
                        <form action="#" className="newsPublish">


                            <div className="form-group text-light">
                                <label for="newsTitle" className="h2">News Title</label>
                                <textarea id="news_title" onChange={newsTitleValue} className="form-control" rows="1"></textarea>
                            </div>


                            <div className="form-group text-light">
                                <label for="newsContent" className="h2">News Content</label>
                                <textarea id="news_content" onChange={newsContentValue} className="form-control" rows="15"></textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" onClick={handleOnSubmit} className="btn btn-primary" >Submit Article</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >

        </>
    );
}


export default Publish;
