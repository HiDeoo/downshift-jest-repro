import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json'

import SelectField from './SelectField';

/**
 * Enzyme configuration.
 */
Enzyme.configure({ adapter: new Adapter() })

describe('render', () => {
  test('should render properly', () => {
    const component = mount(<SelectField items={['test', 'test2']} placeholder="Choose" />)

    expect(toJSON(component)).toMatchSnapshot()
  })
});
