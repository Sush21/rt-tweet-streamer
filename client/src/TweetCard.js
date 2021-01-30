import React from 'react';
import moment from 'moment';


const TweetCard = ({ tweet }) => {

  return (
  <div className="ui feed">
    <div className="ui divider"></div>
    <div className="event">
      <div className="label">
        <img className="ui left floated mini circular image"
          src={tweet.profile_image_url}
          alt={tweet.name}>
        </img>
      </div>
      <div className="content">
        <div className="summary">
          {tweet.name}
            <a href={`https://twitter.com/${tweet.screen_name}/status/${tweet.id_str}`}
            target="_blank"
            rel="noreferrer">
              {" "}
              @{tweet.screen_name}
            </a>
          <div className="date">
            {moment(tweet.created_at).startOf('day').fromNow()}
          </div>
        </div>
        <div className="extra text">
          {tweet.full_text}
        </div>
        <div className="meta">
          <div className="like">
            <i className="like icon"></i>
            {tweet.favorite_count}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TweetCard;




{/* <div className=" ui items ">
<div className="ui divider"></div>
<div className="item">
  <div className="content">
  <img className="ui left floated mini circular image"
    src={tweet.profile_image_url}
    alt={tweet.name}>
  </img>
    <div className="header">
      {tweet.name}
    </div>
    <div className="ui extra">
    <a href={`https://twitter.com/${tweet.screen_name}`} target="_blank" rel="noreferrer">
      @{tweet.screen_name}
    </a>
    </div>
    <h5 className="ui ">
      {tweet.full_text}
    </h5>
    <div className="extra right floated">
    {moment(tweet.created_at).startOf('day').fromNow()}
    </div>
  </div>
</div>
</div> */}