import BaseComponent from "./BaseComponent";
import renderer from 'react-test-renderer';
import React from 'react';

describe('BaseComponent', function() {
    it('should render a basic component', function() {
        const component = renderer.create(
            <BaseComponent element={'test'} />
        );
        const instance = component.toJSON();
        expect(component.toTree()).toBeTruthy();
        expect(instance && instance.type).toEqual('div');
        expect(instance && instance.props.className).toEqual('test test--default');
    });

    it('should correctly render all the correct BEM classes', function() {
        const component = renderer.create(
            <BaseComponent 
                tag={'header'}
                block={'test-block'} 
                element={'item'} 
                modifier={'main'} 
                modifiers={['second', 'third']} 
                extraClasses={'extra1 extra2'}
            />
        );

        const instance = component.toJSON();
        expect(instance && instance.props.className).toEqual('test-block__item item item--main item--second item--third extra1 extra2');
    });

    it('should add attributes', function() {
        const component = renderer.create(
            <BaseComponent
                element={'test-attributes'}
                attributes={{
                    foo: 'bar',
                    bizz: 'fuzz',
                    'data-bar': 'foo'
                }}
            />
        );

        const instance = component.toJSON();
        expect(instance && instance.props).toEqual(
            expect.objectContaining({
                'data-foo': 'bar',
                'data-bizz': 'fuzz',
                'data-bar': 'foo'
            })
        )
    });

    it('should render children', function() {
        const component = renderer.create(
            <BaseComponent
                element={'test'}
            >
                <p className={'foo'}></p>
            </BaseComponent>
        );

        const instance = component.toJSON();
        expect(instance && instance.children && instance.children[0].type).toEqual('p');
    });
});