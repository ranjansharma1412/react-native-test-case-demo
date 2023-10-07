
import { it, describe, expect } from '@jest/globals';
// import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react-native';
import Counter from '../src/counter/Counter';


describe(Counter, () => {
    it("counter display correct initial count", () => {
        render(<Counter initialCount={0} />);

        const countDisplay = Number(screen.getByTestId('count-display').props.children);
        expect(countDisplay).toEqual(0);

        // increment
        const incrementButton = screen.getByTestId('increment-button');
        fireEvent.press(screen.getByTestId('increment-button'));
        const countDisplay2 = Number(screen.getByTestId('count-display').props.children);
        expect(countDisplay2).toEqual(1);

        //decrement
        const decrementButton = screen.getByTestId('decrement-button');
        fireEvent.press(decrementButton);
        const countDisplay3 = Number(screen.getByTestId('count-display').props.children);
        expect(countDisplay3).toEqual(0);

        expect(screen.toJSON()).toMatchSnapshot()
    })
})