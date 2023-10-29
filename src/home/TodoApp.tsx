import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'

const TodoApp = () => {
    const [totoName, setTotoName] = useState<string>('');
    const [totoList, setTotoList] = useState<string[]>([]);

    const addTodo = () => {
        setTotoList([...totoList, totoName]);
    }

    const deleteTodo = (item: string) => {
        const itemAfterDeletion = totoList.filter((todoItem) => todoItem !== item);
        setTotoList([...itemAfterDeletion]);
    }

    const _renderTodoItem = ({ item, index }: { item: string, index: number }) => {
        return (
            <View style={styles.todoItemStyle} key={`${index}`}>
                <Text>{item}</Text>
                <Text style={{color:'red'}} onPress={() => deleteTodo(item)}>Delete</Text>
            </View>
        )
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>TodoApp</Text>
            <Text style={styles.todoCount}>{`${totoList.length} todo remaining`}</Text>
            <View style={{ marginTop: 20 }}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Enter to name'
                    value={totoName}
                    onChangeText={setTotoName}
                />
                <View style={{ marginTop: 20 }}>
                    <Button testID='add-todo' onPress={addTodo} title='Add Todo' />
                </View>
            </View>
            <View style={{ marginTop: 15 }}>
                <FlatList
                    data={totoList}
                    renderItem={_renderTodoItem}
                    keyExtractor={((item, index) => index.toString())}
                />
            </View>
        </View>
    )
}

export default TodoApp

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputStyle: {
        height: 45,
        width: '100%',
        backgroundColor: 'white'
    },
    todoItemStyle: {
        paddingVertical: 5,
        backgroundColor: 'white',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    todoCount: {
        fontSize: 16,
        textAlign: 'right',
    }
})