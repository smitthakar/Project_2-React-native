import { Text, View,SafeAreaView, ScrollView } from 'react-native';
import React, { Component } from 'react';
import FlatCards from './components/FlatCards';

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            {/* <Text>App</Text> */}
            <FlatCards/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;