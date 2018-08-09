/**
 * Test suite for Picture module
 */

import Picture from './Picture';
import {render} from 'react-testing-library';
import React from "react";

describe('Picture:', function () {
	it('should render source elements when given sources prop', function() {
		const component = render(
			<Picture src={'bar.jpg'} sources={[
				{
					media: '(max-width: 400px)',
					src: 'foo.jpg'
				},
				{
					media: '(max-width: 500px)',
					src: 'foo1.jpg'
				}
			]} />
		);

		// @ts-ignore
        expect(component.container.querySelectorAll('source').length).toEqual(2);
	});
});