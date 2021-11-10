

import React, { useState } from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ChartScreen from './src/pages/chart-screen';


function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Drawer.Screen name="goldPrice" component={ChartScreen} options={{
        drawerLabel: 'Gold Price',
        headerTitle: 'ROB.N',
        headerTintColor: '#05c795',
        headerTitleAlign: "center",
        headerTitleStyle: { color: "white" },
        headerStyle: {
          backgroundColor: '#030c15',
        },

      }}
      />
    </Drawer.Navigator>
  );
}



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <MyDrawer />
    </NavigationContainer>

  );
}

