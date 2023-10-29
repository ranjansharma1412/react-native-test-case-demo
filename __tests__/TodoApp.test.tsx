import { it, describe, expect } from '@jest/globals';
// import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react-native';
import TodoApp from '../src/home/TodoApp';

describe('Todo app test case',()=>{
    it('todo app snapshot testing',()=>{
        render(<TodoApp/>)
        expect(screen.toJSON()).toMatchSnapshot()
    })
})


