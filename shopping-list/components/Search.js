import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { elevation } from '../common/styles';

export default function Search({ searchCategory }) {
  const [input, setInput] = useState('');

  const handleEndEditing = () => {
    if (!input) return;
    searchCategory(input);
    setInput('');
  };

  return (
    <View style={[styles.search, styles.elevation]}>
      <FontAwesome name='search' size={25} color='grey' />
      <TextInput
        style={styles.textInput}
        value={input}
        placeholder='Restaurants, food...'
        onChangeText={(text) => setInput(text)}
        onEndEditing={handleEndEditing}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
    search: {
      flexDirection: 'row',
      marginVertical: 25,
      marginHorizontal: 25,
    },
    elevation,
    textInput: {
      marginLeft: 10,
      marginRight: 20,
      fontSize: 14,
    }
});
