import BaseComponent, {BaseProps} from './BaseComponent';
import * as React from "react";

const defaultProps = {
    tag: 'button',
    element: 'btn'
};

export default function Button(props: BaseProps) {
    return (<BaseComponent {...defaultProps } {...props} />);
};


