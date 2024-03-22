
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';
import JournalObserver from './JournalObserver';

export default function JournalEntry({ journalSubject }) {
  const [entry, setEntry] = useState('');

  useEffect(() => {
    const journalObserver = new JournalObserver();
    journalSubject.addObserver(journalObserver);
    return () => {
      journalSubject.removeObserver(journalObserver);
    };
  }, []);

  const handleAddEntry = () => {
    journalSubject.addEntry(entry);
    setEntry('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setEntry}
        value={entry}
        placeholder="Enter your journal entry"
      />
      <Button title="Add Entry" onPress={handleAddEntry} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
