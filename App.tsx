import React from 'react'
import { View, Text } from 'react-native'
import Counter from './src/counter/Counter'

const App = () => {
  return (
    <Counter initialCount={0} />
  )
}

export default App