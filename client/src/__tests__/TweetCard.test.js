import React from 'react';
import { shallow } from 'enzyme';
import TweetCard from '../TweetCard';
import { tweet } from '../TestsData';

describe('TweetCard', () => {
  it('should be defined', () => {
    expect(TweetCard).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <TweetCard tweet={tweet} />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('img').props().src).toEqual(tweet.profile_image_url);
    expect(wrapper.find('div').first().hasClass('feed')).toEqual(true);
    expect(wrapper.find('a').length).toEqual(4);
    expect(wrapper.find('a').at(2).props().href).toEqual('https://twitter.com/VP');
    expect(wrapper.find('.extra').length).toEqual(1);
    expect(wrapper.find('b').text()).toEqual('132.4k');
  });
});
