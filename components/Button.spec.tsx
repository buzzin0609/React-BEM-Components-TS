
import React from 'react';
import Button from './Button';
import {render, fireEvent} from 'react-testing-library';

describe('Button', () => {
    it('should bind a click handler and trigger when component clicked', function() {
        const handler = jest.fn();
        const component = render(
            <Button onClick={handler}>Submit</Button>
        );
    
        fireEvent.click(
            component.getByText('Submit')
          );
        
        expect(handler).toHaveBeenCalledTimes(1);
    });
});