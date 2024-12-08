import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { colors } from '../utils/colors';

const HomeScreen = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log(`Counter updated: ${counter}`);
  }, [counter]);

  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Counter: {counter}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCounter(counter + 1)}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.text,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
