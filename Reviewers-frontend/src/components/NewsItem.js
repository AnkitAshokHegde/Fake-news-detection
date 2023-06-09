import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';


const NewsItem = (props) => {

  const [showPopup, setshowPopup] = useState(false);
  const [voteValue, setvoteValue] = useState('');
  const [isShown, setisShown] = useState(true);

  const votedNewsId = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(votedNewsId);
  // const [items, setItems] = useState([]);

  useEffect(()=>{
    localStorage.setItem('items', JSON.stringify(items));
  },[]);

  const handleOptionChnage = (event) => {
    setvoteValue(event.target.value);
  }

  const handleReset = () => {
    setvoteValue('');
  }

  const hideComponent = ()=>{
    setisShown(false);
  }

  const togglePopup = () => {
    setshowPopup(!showPopup);
  }

  const isAlreadyVoted = (address, news_id)=>{
    if(address==props.walletAccountAddress ){
      // if(voted_news_id.find)      
    }
  }

  const handleVote = (e) => {

    e.preventDefault();    

    if (voteValue) {
      const confirmBox = window.confirm(
        "Are you sure ?  Your vote value is : \" "+voteValue.toUpperCase() + " \""
      )
      if (confirmBox === true) {

        // Your code for voting transfer here
        items.append("K");

        NotificationManager.success('Your vote for the news title - \"'+ props.title + '\" is : '+voteValue.toUpperCase(),'Vote submitted');                
        hideComponent();
      }

      handleReset();
    }   
    
    togglePopup();

  }


  return (    
    <div className="my-3">      
      {isShown &&
        <div className="card">

        <div className="card-body">
          
          <h5 className="card-title">{props.title}</h5>          
          <p className="card-text">{props.description}</p>                           

          <form action="#" onSubmit={handleVote}>
            <div className="d-flex justify-content-around">
              {
                showPopup && (
                  <div className="d-flex mx-5 flex-row">
                    <div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" d="flexRadioDefault1"
                          value="fake" onChange={handleOptionChnage} />
                        <label class="form-check-label" for="voteNews">Fake news</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                          value="genuine" onChange={handleOptionChnage} />
                        <label class="form-check-label" for="voteNews">Genuine news</label>
                      </div>
                    </div>
                    <div className="ml-3">
                      <button className="m-1 btn btn-sm btn-warning" onClick={handleReset}>
                        {/* Reset */}                        
                        <FontAwesomeIcon icon={faRefresh} />
                      </button>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="d-flex mt-4 justify-content-around">
              {/* <a
              href={props.newsURL}
              target="_blank"
              className="btn btn-sm btn-primary text-white"
              >
              Read more
            </a> */}

              <button href="#" target="_blank" className="btn btn-sm btn-danger"
                onClick={handleVote}
              >
                Vote
              </button>
            </div>
          </form>
        </div>
      </div>}
    </div>
  );
};

export default NewsItem;