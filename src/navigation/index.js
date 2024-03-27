import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AddScreen from '../screens/RecipeDetailsScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

const stack = createNativeStackNavigator ();
export default function AppNavigation() {
  return (
    <NavigationContainer> 
        <stack.Navigator
        initialRouteName="Welcome"
        screenOptions={
            {
                headerShown: false,
            }
        }
        >
          <stack.Screen name="Welcome" component={WelcomeScreen} />
            <stack.Screen name="Home" component={HomeScreen} />
            <stack.Screen name="Add" component={RecipeDetailsScreen} />

            

        </stack.Navigator>
    </NavigationContainer>
    
  );
}
