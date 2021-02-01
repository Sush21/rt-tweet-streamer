import React from 'react';

export const BASE_URL = 'http://localhost:3001';
export const handles = ['potus', 'elonmusk', 'CDCgov', 'seniorly'];
export const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// convert Likes to K Format
export const kFormatter = (num) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

// check if the tweet has any mentions or links
export const checkForLinks = (str) => {
  let i = 0; let k = 0; let
    key = 0;
  const buffer = [];
  while (i < str.length) {
    if (str[i] === '@') {
      buffer.push(str.substring(k, i));
      let j = i + 1;
      while ((/[a-zA-Z0-9_]/).test(str[j]) && j < str.length) j += 1;
      const tag = (
        <a
          href={`https://twitter.com/${str.substring(i + 1, j)}`}
          key={key}
          target="_blank"
          rel="noreferrer"
        >
          {str.substring(i, j)}
        </a>
      );
      buffer.push(tag);
      key += 1;
      k = j;
      i = j;
    } else if (str[i] === 'h') {
      if (str[i + 1] === 't' && str[i + 2] === 't' && str[i + 3] === 'p') {
        buffer.push(str.substring(k, i));
        let j = i;
        while (str[j] !== ' ' && j < str.length) j += 1;

        const link = (
          <a
            href={str.substring(i, j)}
            key={key}
            target="_blank"
            rel="noreferrer"
          >
            {str.substring(i, j)}
          </a>
        );
        buffer.push(link);
        key += 1;
        k = j;
        i = j;
      }
    } else if (str[i] === 'R' && str[i + 1] === 'T' && str[i + 2] === ' ') {
      buffer.push(str.substring(k, i));
      const retweet = <i className="retweet icon blue" key={key} />;
      buffer.push(retweet);
      key += 1;
      k = i + 3;
    }
    i += 1;
  }
  buffer.push(str.substring(k, i));
  return buffer;
};
