import React from 'react';
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Cell = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.textWrapper}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  )
};

const AutocompleteList = ({autocompletes, onPress, style}) => {
  return (
    <FlatList
      data={autocompletes}
      renderItem={({item}) => <Cell onPress={() => {onPress(item.key)}} text={item.key}/>}
      style={style}
    />
  )
};

styles = StyleSheet.create({
  textWrapper: {
    backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 5,
  }
});

export default AutocompleteList;
