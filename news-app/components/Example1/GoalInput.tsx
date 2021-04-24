import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
const GoalInput = (props: any) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText: any) => {
        setEnteredGoal(enteredText);
    };
    // props.onAddGoal.bind(this, enteredGoal)
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer} >
                <TextInput
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                >

                </TextInput>
                <Button
                    title="ADD" onPress={() => props.onAddGoal(enteredGoal)}>
                </Button>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default GoalInput;