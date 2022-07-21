import React from 'react';
import {Text, View} from 'react-native';

const Main: React.FC<{}> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Main Screen</Text>
    </View>
  );
};

export default Main;
