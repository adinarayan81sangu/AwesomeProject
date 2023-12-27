import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import DraggableFlatList from 'react-native-draggable-flatlist';

const DraggableFlatListExample = () => {
  const [data, setData] = useState([
    { key: 'item1', text: 'Item 1' },
    { key: 'item2', text: 'Item 2' },
    { key: 'item3', text: 'Item 3' },

    // Add more items as needed

  ]);
  const renderItem = ({ item, index, drag, isActive }: any) => {
    return (
      <View style={[styles.item, isActive && styles.activeItem]}>
        <Text>{item.text}</Text>
        <TouchableHighlight
          style={styles.dragHandle}
          onPress={drag}
        >
          <Text>Drag</Text>
        </TouchableHighlight>
      </View>
    );

  };
  const onDragEnd = ({ data: updatedData }: any) => {
    setData(updatedData);
  };
  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onDragEnd={onDragEnd}
      />

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    paddingTop: 40,

  },

  item: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#ccc',

    backgroundColor: '#fff',

  },

  activeItem: {

    backgroundColor: 'lightblue',

  },

  dragHandle: {

    padding: 10,

    backgroundColor: 'lightgray',

    borderRadius: 5,

  },

});



export default DraggableFlatListExample;