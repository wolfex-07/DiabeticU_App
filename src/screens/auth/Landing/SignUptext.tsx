import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App: React.FC = () => {
  const handlePressSignup = () => {
    // Handle signup button press
    console.log('Signup pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account? </Text>
      <TouchableOpacity onPress={handlePressSignup}>
        <Text style={[styles.text, styles.signupText]}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
  },
  signupText: {
    color: 'red',
  },
});

export default App;
