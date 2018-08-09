import BaseComponent, {BaseProps} from './BaseComponent';
import * as React from "react";

const defaultProps = {
    tag: 'p',
    element: 'text'
};

export default function Text(props: BaseProps) {
    return (<BaseComponent {...defaultProps } {...props} />);
};