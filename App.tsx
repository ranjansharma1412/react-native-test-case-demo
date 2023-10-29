import React from 'react'
import { View, Text } from 'react-native'
import Counter from './src/counter/Counter'
import TodoApp from './src/home/TodoApp'

const App = () => {
  return (
    <TodoApp/>
    // <Counter initialCount={0} />
  )
}

export default App