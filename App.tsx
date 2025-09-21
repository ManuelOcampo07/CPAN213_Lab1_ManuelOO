import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/Home/HomeScreen';

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <StatusBar barStyle="light-content" backgroundColor="#3498db" />
    <HomeScreen />
  </SafeAreaView>
);

export default App;
