import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, Text, View, ScrollView, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import GoalItem from './components/Example1/GoalItem'
import GoalInput from './components/Example1/GoalInput';
export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const [isAddMode, setIsAddMode] = useState(false);
    const [courseGoals, setCourseGoals] = useState<any[]>([]);

    const addGoadlHandler = (goalTitle: any) => {
        
        if(goalTitle.lenght == 0 || goalTitle == undefined){
            return;
        }
        setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
        setIsAddMode(false);
    }
    const cancelGoalHandler = () =>{
        setIsAddMode(false);
    }
    const removeGoadlHandler = (goalId: any) => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    }
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={styles.screen}>
                <Button title="Add new goal" onPress={() => setIsAddMode(true)}/>
                <GoalInput visible={isAddMode} onAddGoal={addGoadlHandler} onCancle={cancelGoalHandler} />
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={courseGoals}
                    renderItem={itemData =>
                        <GoalItem
                            title={itemData.item.value} 
                            id={itemData.item.id} 
                            onDelete={removeGoadlHandler} 
                            />}
                />
                {/* <ScrollView>
                    {courseGoals.map((goal, index) => {
                        return (
                            <View key={index} style={styles.listItem}>
                                <Text >
                                    {goal}
                                </Text>
                            </View>
                        );
                    })}
                </ScrollView> */}
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        padding: 50
    },


});