export interface BaseProps {
    [index: string]: any;
    tag?: string;
    block?: string;
    element?: string;
    modifier?: string;
    modifiers?: string[];
    extraClasses?: string;
    id?: string;
    attributes?: any;
    src?: string;
    alt?: string;
    href?: string;
    sources?: any;
    style?: any;
}

export const baseDefaultProps = {
    tag: 'div',
    block: '',
    modifier: 'default',
    modifiers: [],
    extraClasses: '',
    attributes: {}
};