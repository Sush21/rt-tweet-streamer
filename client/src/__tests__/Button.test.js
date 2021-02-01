// Button.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
  const mockFn = jest.fn();
  const handler = 'test';
  it('should render correctly', () => {
    const wrapper = shallow(
      <Button handler={handler} handleClick={mockFn} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call mock function when button is clicked', () => {
    const wrapper = shallow(
      <Button handler={handler} handleClick={mockFn} />,
    );
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
