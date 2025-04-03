import { Text, View,SafeAreaView, ScrollView } from 'react-native';
import React, { Component } from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            {/* <Text>App</Text> */}
            <FlatCards/>
            <ElevatedCard />
            <FancyCard />
            <ActionCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;