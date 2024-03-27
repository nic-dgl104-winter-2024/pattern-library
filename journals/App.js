// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import JournalEntry from './JournalEntry';

export default function App() {
  return (
    <View style={styles.container}>
      <JournalEntry />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
