import React from 'react';
import {View} from 'react-native';
import Navigation from './Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </Provider>
  );
}
