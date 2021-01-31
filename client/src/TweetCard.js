import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { kFormatter, checkForLinks } from './UseHelper';

// Display tweet content
const TweetCard = ({ tweet }) => (
  <div className="ui feed">
    <div className="ui divider" />
    <div className="event">
      <div className="label">
        <img
          className="ui left floated mini circular image"
          src={tweet.profile_image_url}
          alt={tweet.name}
        />
      </div>
      <div className="content">
        <div className="summary">
          {tweet.name}
          <a
            href={`https://twitter.com/${tweet.screen_name}`}
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            @
            {tweet.screen_name}
          </a>
          <div className="date">
            <a
              href={`https://twitter.com/${tweet.screen_name}/status/${tweet.id_str}`}
              target="_blank"
              rel="noreferrer"
            >
              {moment(tweet.created_at).startOf('day').fromNow()}
            </a>
          </div>
        </div>
        <div className="extra text">
          {checkForLinks(tweet.full_text)}
        </div>
        <div className="meta">
          <div className="like">
            <b>{kFormatter(tweet.favorite_count)}</b>
            {' '}
            Likes
          </div>
        </div>
      </div>
    </div>
  </div>
);

TweetCard.propTypes = {
  tweet: PropTypes.shape({
    profile_image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    screen_name: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    full_text: PropTypes.string.isRequired,
    favorite_count: PropTypes.number.isRequired,
  }).isRequired,

};
export default TweetCard;
