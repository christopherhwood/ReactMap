import React from 'react';
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Cell = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
};

const AutocompleteList = ({autocompletes, onPress, style}) => {

  return (
    <FlatList
      data={autocompletes.map(rec => ({key: rec}))}
      keyboardShouldPersistTaps={'always'}
      renderItem={({item}) => <Cell onPress={() => {onPress(item.key)}} text={item.key}/>}
      style={style}
    />
  )
};

styles = StyleSheet.create({
  textWrapper: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});

export default AutocompleteList;
