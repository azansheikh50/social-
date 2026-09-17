import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import TabNavigator from './src/navigation/TabNavigator';
import ChatScreen from './src/screens/ChatScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import {store} from './src/store/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{headerShown: true, title: 'User Profile'}}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={({route}) => ({
              headerShown: true,
              title: route.params?.userName
                ? `Chat with ${route.params.userName}`
                : 'Chat',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
