import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Color from '../constants/Colors'
import { Platform } from 'react-native';
const Stack = createStackNavigator();
export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Categories" 
          component={CategoriesScreen} 
          options={{ 
            title: 'Meal Categories',
            headerStyle:{
              backgroundColor:Platform.OS === 'android' ? Color.primaryColor : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Color.titleColor
          }}
        />
        <Stack.Screen 
          name="CategoryMeal" 
          component={CategoryMealsScreen} 
          options={({ route }) => ({ 
            title: route.params?.title,
            headerStyle:{
              backgroundColor:Platform.OS === 'android' ? Color.primaryColor : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Color.titleColor
          })}
          />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


