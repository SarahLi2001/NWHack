import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaViewBase, StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Press Here"> </Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
