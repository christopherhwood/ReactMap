import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import AutoVisibleTextInput from './AutoVisibleTextInput';
import AutocompleteList from './AutocompleteList';

const SearchBar = ({autocompletes, query, onChangeText, onSearch, style}) => {

  return (
    <View style={[style, styles.container]}>
      <AutoVisibleTextInput
        clearButtonMode='always'
        onChangeText={onChangeText}
        onSubmitEditing={() => onSearch()}
        returnKeyType='search'
        style={styles.input}
        value={query}
      />
      {autocompletes.length > 0 &&
        <AutocompleteList
        autocompletes={autocompletes}
        onPress={onSearch}
        style={styles.list}
        />
      }

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    flex: 1,
    height: 40,
  },
  list: {
    backgroundColor: 'white',
    borderTopColor: 'black',
    borderTopWidth: 1,
    height: 120,
    flex: 1,
  }
});

export default SearchBar;
