import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const Counter = ({ initialCount }: { initialCount: number }) => {
    const [count, setCount] = useState(initialCount)

    const incrementCount = () => {
        setCount(count + 1);
    }
    const decrementCount = () => {
        setCount(count - 1);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
            <Text >Count: {count}</Text>
            <View style={{ marginTop: 20 }}>
                <Button onPress={incrementCount} title='Increment' />
            </View>
            <View style={{ marginTop: 20 }}>
                <Button onPress={decrementCount} title='Decrement' />
            </View>
        </View>
    )
}

export default Counter