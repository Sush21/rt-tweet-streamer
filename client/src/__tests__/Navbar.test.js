// Button.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';
import { handles } from '../UseHelper';

describe('Header', () => {
  const mockFn = jest.fn();
  const offset = 201;
  const spyScrollTo = jest.fn();

  it('should be defined', () => {
    expect(Navbar).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <Navbar changeHandle={mockFn} />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Button').length).toEqual(handles.length);
    expect(wrapper.find('div').first().hasClass('sticky')).toEqual(false);
  });
  it('should click buttons', () => {
    const wrapper = shallow(
      <Navbar changeHandle={mockFn} />,
    );
    const button = wrapper.find('Button').first().dive();
    button.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
  // it('test page scrolling', () => {
  //   const wrapper = shallow(
  //     <Navbar changeHandle={mockFn} />,
  //   );
  //   window.scrollTo = jest.fn();
  //   const button = wrapper.find('Button').first().dive();
  //   button.simulate('click');
  //   expect(window.scrollTo).toBeCalledWith(0, 0);
  // });
});
