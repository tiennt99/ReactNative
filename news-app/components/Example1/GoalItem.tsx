import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
const GoalItem = (props: any) => {
    return (
        <TouchableOpacity 
            onPress={props.onDelete.bind(this, props.id)}
            activeOpacity={0.8}
            >
            <View style={styles.listItem}>
                <Text >
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10
    }
})

export default GoalItem;