import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FormLogin from "./FormLogin";
import HomeStack from "./stack/HomeStack";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
                <Tab.Screen name='profile' component={HomeStack} options={{title: 'Profile'}}/>
                <Tab.Screen name='login' component={FormLogin} options={{title: 'Login'}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
};