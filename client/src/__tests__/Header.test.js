// Header.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import banner from '../assets/images/banner.jpg';

describe('Header', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <Header profileBanner={banner} />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('div.content').text()).toContain('Real Time Tweet Streamer');
  });
});
