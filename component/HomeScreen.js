// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
 

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={{ padding:10, fontSize:20 }}>Cash Book Home page</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('BookScreen')}
      />
    </View>
  );
}

export default HomeScreen;