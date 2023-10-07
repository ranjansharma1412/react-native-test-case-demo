
import { it, describe, expect } from '@jest/globals';
import Counter from './Counter';
// import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';


describe(Counter, () => {
    it("counter display correct initial count", () => {
        const { getByA11yLabel } = render(<Counter initialCount={0} />);

        // Initial count should be 0
        const countText = getByA11yLabel('count-text');
        expect(countText).toBeTruthy();

        // Simulate button press
        const incrementButton = getByA11yLabel('increment-button');
        fireEvent.press(incrementButton);

        // After pressing the button, the count should be 1
        const updatedCountText = getByA11yLabel('count-text');
        expect(updatedCountText).toBeTruthy();
        expect(updatedCountText).toHaveTextContent('Count: 1');
    })
})