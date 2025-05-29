import React from 'react';
import { View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';


export default function MainScreen() {
  const [name, setName] = React.useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text variant="titleLarge">Welcome!</Text>

      <TextInput
        label="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
        style={{ marginVertical: 10 }}
      />

      <Button mode="contained" onPress={() => alert(`Hello, ${name}!`)}>
        Say Hello
      </Button>
    </View>
  );
}

