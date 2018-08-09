import BaseComponent, {BaseProps} from './BaseComponent';
import * as React from "react";

const defaultProps = {
    tag: 'h2',
    element: 'title'
};

export default function Title(props: BaseProps) {
    return (<BaseComponent {...defaultProps } {...props} />);
};
