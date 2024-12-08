import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../utils/colors';

const Header = ({ title }) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={styles.headerContainer}
    >
      <Text style={styles.headerText}>{title}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: colors.background,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium', // Font modern
  },
});

export default Header;
