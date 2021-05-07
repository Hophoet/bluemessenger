// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Conversations from '../screens/main/Conversations';
import ConversationDetail from '../screens/main/ConversationDetail';
import Stories from '../screens/main/Stories';
import StoryDetail from '../screens/main/StoryDetail';
import AddTextStory from '../screens/main/AddTextStory';
import AddAudioStory from '../screens/main/AddAudioStory';

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


function Story() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Stories" component={Stories} />
        <Stack.Screen name="StoryDetail" component={StoryDetail} />
        <Stack.Screen name="AddTextStory" component={AddTextStory} />
        <Stack.Screen name="AddAudioStory" component={AddAudioStory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Story;
