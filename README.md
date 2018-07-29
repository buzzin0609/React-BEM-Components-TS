# React BEM Components

Super simple components to create BEM styled component.

## Components

React BEM comes with multiple built in components

- Wrapper
- Title
- Text
- Button
- Link

## Usage

Each component has named props to aid in building your desired BEM structure

```javascript

import React, { Component } from 'react'
import { Wrapper, Title, Text, Button } from 'react-bem';

class MyBEMComponent extends Component {

    clickHandler(e) {
        console.log('clicked');
    }

    render() {

        const block = 'my-component';

        render (
            //the first element should use the block as its element. All children use it as the block
            <Wrapper element={block}>
                <Title block={block}>Cool Title</Title>
                <Text block={block} modifier={'large'}>Some large text</Text>
                <Button onClick={this.clickHandler.bind(this)} block={block} modifier={'wide'} modifiers={['outline', 'wave-hover']}>Click me</Button>
            </Wrapper>
        );
    }
}

/**
rendering this component outputs:

<div class="my-component my-component--default">
    <h2 class="my-component__title title title--default">Cool Title</h2>
    <p class="my-component__text text text--large">Some large text</p>
    <button class="my-component__btn btn btn--wide btn--outline btn--wave-hover">Click me</button>
</div>

*/

```

## Props

Each BEM props comes with the same basic prop types:

```javascript

const propTypes = {
    // the element tag e.g. div, h1, p, etc
    tag: PropTypes.string,
    block: PropTypes.string,
    element: PropTypes.string.isRequired,
    modifier: PropTypes.string,
    // for elements with multiple modifiers required
    modifiers: PropTypes.arrayOf(PropTypes.string),
    // any non bem related classes
    extraClasses: PropTypes.string,
    id: PropTypes.string,
    // data-attributes
    attributes: PropTypes.object
};

```