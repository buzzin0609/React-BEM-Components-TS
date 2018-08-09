import React from 'react';
import renderer from 'react-test-renderer';
import Title from './Title';

describe('Title', () => {
    
    it('should render a h2 by default', function () {
        const component = renderer.create(
            <Title />
        );

        const instance = component.toJSON();

        expect(instance && instance.type).toEqual('h2');
    });

});