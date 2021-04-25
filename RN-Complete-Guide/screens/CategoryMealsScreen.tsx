import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
const CategoryMealsScreen = (props: any) => {
    return (
        <View style={styles.screen}>
            <Text>The category meal screen</Text>
            <Button title="Go to detail" onPress = {() => {
                props.navigation.navigate('MealDetail')
            }}/>
        </View>
    );
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default CategoryMealsScreen;