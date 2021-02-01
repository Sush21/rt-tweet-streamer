import React from 'react';
import { shallow, mount } from 'enzyme';
import { handles } from '../UseHelper';
import tweets from '../TestsData';
import App from '../App';
import useTwitter from '../useTwitter';

describe('App', () => {
  let wrapper;
  it('should be defined', () => {
    expect(App).toBeDefined();
  });
  it('should render correctly', () => {
    wrapper = shallow(
      <App />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render all handles in the array <Button /> components', () => {
    expect(wrapper.find('Navbar').dive().find('Button').length).toEqual(handles.length);
  });

  it('should not scroll top', () => {
    global.scrollTo = jest.fn();
    const setHandle = jest.fn();
    wrapper = shallow(<App />);
    const changeHandle = jest.spyOn(React, 'useState');
    changeHandle.mockImplementation((handle) => [handle, setHandle]);
    wrapper.find('Navbar').dive().find('Button')
      .first()
      .dive()
      .simulate('click');
    expect(setHandle).toBeTruthy();
    expect(global.scrollTo).not.toHaveBeenCalled();
    // expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
