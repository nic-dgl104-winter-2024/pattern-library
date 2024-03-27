import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Button, View, Text } from 'react-native';
import JournalObserver from './JournalObserver';
import JournalSubject from './JournalSubject';

const journalSubject = new JournalSubject();

export default function JournalEntry() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const journalObserver = new JournalObserver(setEntries);
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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEntry}
        value={entry}
        placeholder="Enter your journal entry"
      />
      <Button title="Add Entry" onPress={handleAddEntry} />
      <View style={styles.entriesContainer}>
        {entries.map((entry, index) => (
          <View key={index} style={styles.entryItem}>
            <Text>{entry}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  entriesContainer: {
    marginTop: 20,
  },
  entryItem: {
    marginBottom: 10,
  },
});
