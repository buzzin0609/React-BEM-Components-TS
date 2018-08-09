import BaseComponent, {BaseProps} from './BaseComponent';
import * as React from "react";

const defaultProps = {
    tag: 'a',
    element: 'link'
};

export default function Link(props: BaseProps) {
    return (<BaseComponent {...defaultProps } {...props} />);
};