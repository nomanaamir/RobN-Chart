

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
      <Drawer.Screen name="Conakry Index" component={ChartScreen} options={{
        drawerLabel: 'Conakry Index',
        headerTitle: 'Dollar',
        headerTintColor: '#e2eafc',
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

