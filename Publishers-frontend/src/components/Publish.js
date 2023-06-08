import { stringify } from "querystring";
import React, { Component, useState } from "react";
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

    const[newsTitle, setnewsTitle] = useState('');
    const[newsContent, setnewsContent] = useState('');
    const[newsStatus, setnewsStatus] = useState(0);

    const handleOnSubmit = async (e)=>{     
        e.preventDefault();

        try{   
        const url = `http://localhost:5001/publish`;    
        setnewsStatus(0);    
        let data = await fetch(url,{
            method:"post",
            body:JSON.stringify({newsContent, newsTitle, newsStatus}),
            headers:{
                "Content-type":"application/json"
            }
        });

        console.log(newsTitle, newsStatus, newsContent);

        data = await data.json();
        window.alert("Article submitted !!!");

        setnewsTitle('');
        setnewsContent('');

    }
    catch(e){
        console.log("Error while hanlding submit"+e);
    }
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
                                <textarea id="news_title" onChange={(e)=>{
                                    setnewsTitle(e.target.value);                                    
                                }}  
                                value={newsTitle} 
                                className="form-control" rows="1"></textarea>
                            </div>


                            <div className="form-group text-light">
                                <label for="newsContent" className="h2">News Content</label>
                                <textarea id="news_content" onChange={(e)=>{
                                    setnewsContent(e.target.value); }} 
                                    value={newsContent}
                                className="form-control" rows="15"></textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button disabled={ !newsTitle || !newsContent } type="button" onClick={handleOnSubmit} className="btn btn-primary" >Submit Article</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >

        </>
    );
}

export default Publish;