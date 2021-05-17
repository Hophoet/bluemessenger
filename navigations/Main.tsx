// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Conversations from '../screens/main/Conversations';
import ConversationDetail from '../screens/main/ConversationDetail';
import Stories from '../screens/main/Stories';
import Tontine from '../screens/main/Tontine';
import AddUsersToTontine from '../screens/main/AddUsersToTontine';
import AddTitleToTontine from '../screens/main/AddTitleToTontine';
import TontineOverview from '../screens/main/TontineOverview';
import Profile from '../screens/profile/Profile';
import Card from '../screens/main/Card';
import ParameterTontine from '../screens/main/ParameterTontine';
import StoryDetail from '../screens/main/StoryDetail';
import AddTextStory from '../screens/main/AddTextStory';
import AddAudioStory from '../screens/main/AddAudioStory';
import AddMediaStory from '../screens/main/AddMediaStory';
import Calls from '../screens/main/Calls';

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
        <Stack.Screen name="AddMediaStory" component={AddMediaStory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Call() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calls" component={Calls} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TontineNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tontine" component={Tontine} />
        <Stack.Screen name="AddUsersToTontine" component={AddUsersToTontine} />
        <Stack.Screen name="AddTitleToTontine" component={AddTitleToTontine} />
        <Stack.Screen name="ParameterTontine" component={ParameterTontine} />
        <Stack.Screen name="TontineOverview" component={TontineOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function CardNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Card" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ProfileNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default ProfileNav;
