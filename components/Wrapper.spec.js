
import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from './Wrapper';

describe('Wrapper', () => {
    
    it('should use the wrapper element prop in the className', function() {
        const component = renderer.create(
            <Wrapper></Wrapper>
        );

        const instance = component.toJSON();

        expect(instance.props.className).toEqual('wrapper wrapper--default');
    });

});