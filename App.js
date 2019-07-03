/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  card: {
    backgroundColor: 'white',
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    elevation: 3,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    padding: 8,
  },
  code: {
    backgroundColor: '#F3DDB3',
  },
  example: {
    flexDirection: 'row',
    margin: 8,
    backgroundColor: '#C1CD97',
  },
  filler: {
    flex: 1,
    backgroundColor: '#E18D96',
  },
});

const examples = [
  {
    description: 'Text without style',
  },
  {
    description: null,
    textStyle: {
      fontWeight: 'bold',
    },
  },
  {
    description:
      'We can solve this by applying a border to our text, but then it will not be vertically centered.',
    textStyle: {
      fontWeight: 'bold',
      borderWidth: 2,
      borderColor: 'transparent',
    },
  },
  {
    description:
      'We can solve this by setting a negative marginBottom corresponding to our vertical borders width.',
    textStyle: {
      fontWeight: 'bold',
      borderWidth: 2,
      borderColor: 'transparent',
      marginBottom: -4,
    },
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      {examples.map((example, index) => (
        <View style={styles.card} key={index}>
          <View style={styles.header}>
            {example.textStyle ? (
              <Text style={styles.code}>
                {JSON.stringify(example.textStyle, null, 2)}
              </Text>
            ) : null}
            {example.description ? <Text>{example.description}</Text> : null}
          </View>
          <View style={styles.example}>
            <Text style={example.textStyle}>This looks great!</Text>
            <View style={styles.filler} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default App;
