import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screen1, Screen2, Screen3} from './src/components/screens';


const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  roundness:2,
  colors:{
    ...DefaultTheme.colors,
    primary:'#0009a3',
    accent:'#000666'
  }
}



export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="1" component={Screen1}/>
          <Tab.Screen name="2" component={Screen2}/>
          <Tab.Screen name="3" component={Screen3}/>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
