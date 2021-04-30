// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Conversations from '../screens/main/Conversations';
import ConversationDetail from '../screens/main/ConversationDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Conversations" component={Conversations} />
        <Stack.Screen name="ConversationDetail" component={ConversationDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
