import Image from './Image';
import React from "react";
import {render} from "react-testing-library";

describe('Image:', function () {
	it('should render an img with a src prop', function () {
		const component = render(
			<Image src={'foo.jpg'} />
		);

		// @ts-ignore
        expect(component.container.firstChild.src).toEqual(
			expect.stringContaining('foo.jpg')
		);
	});
});