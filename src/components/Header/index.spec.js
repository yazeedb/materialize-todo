import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './';

const makeWrapper = (props) => mount(<Header { ...props } />);

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
	it('renders text as an <h1 />', () => {
		const wrapper = makeWrapper({ text: 'Hello World'});
		const h1 = wrapper.find('h1');

		expect(h1.text()).toBe('Hello World');
	});
});
