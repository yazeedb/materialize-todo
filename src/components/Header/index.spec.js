import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './';

const makeWrapper = (props) => mount(<Header { ...props } />);

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
	it('displays text inside of an <h1 />', () => {
		const wrapper = makeWrapper({ text: 'Hello World'});

		expect(wrapper.text()).toBe('Hello World');
	});
});
