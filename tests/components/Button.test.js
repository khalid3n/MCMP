import React from 'react';
import { shallow, configure } from 'enzyme';
import Button from '../../app/components/Button';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Button Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button text="hello" />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });
});