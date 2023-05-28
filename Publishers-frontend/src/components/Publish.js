import React, { Component } from "react";
import Loading from "./Loading";

let news_title;
let news_content;
function Publish() {

    const handleOnSubmit = (e) => {
      fetch("http://localhost:5000",{
        body:JSON.stringify(
            {news_tittle:news_title,
            news_connect:news_content}
        ),
        method: "POST"
      });
    }

    const textTitle= (e) => {
        news_title=e.target.value;
    }
    const newsContent=(e) =>{
        news_content=e.target.value;
    }
    return (
        <>
            {/* headline */}
            <div className="container my-3">
                <div className="text-center headline">

                    {/* <h1>{this.props.category.charAt(0).toUpperCase() +this.props.category.slice(1)}</h1> */}
                    <h1>Publish your Article</h1>
                </div>


                <div className="row">
                    {/* <div className="col-md-4 col-bg-6 col-xb-12" > */}
                    <div className="col" >
                        <form action="#" className="newsPublish">


                            <div className="form-group text-light">
                                <label for="newsTitle" className="h2">News Title</label>
                                <textarea id="news_title" onChange={textTitle} className="form-control" rows="1"></textarea>
                            </div>


                            <div className="form-group text-light">
                                <label for="newsContent" className="h2">News Content</label>
                                <textarea id="news_content" onChange={newsContent} className="form-control" rows="15"></textarea>
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
