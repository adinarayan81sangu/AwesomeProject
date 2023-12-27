import {View, Text, Dimensions, FlatList, TouchableOpacity,} from 'react-native';
import {red} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');
function QuestionItem({data, selectedOption}: any) {
  const isType = data.type;
  // console.log(isType);

  return (
    <View style={{width: width}}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '600',
          color: 'black',
          marginLeft: 20,
          marginRight: 20,
        }}>
        {data.question}
      </Text>

      <View style={{marginTop: 20}}>
        {isType === 'LIST' ? (
          <FlatList
            data={data.Options}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '90%',
                    height: 50,
                    elevation: 3,
                    backgroundColor: data.marked === index + 1 ? 'red' : '#fff',
                    marginTop: 20,
                    marginBottom: 10,
                    alignSelf: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}
                  onPress={() => {
                    selectedOption(index + 1);
                  }}>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 15,
                      borderRadius: 15,
                      backgroundColor: 'cyan',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>
                      {index == 0
                        ? 'A'
                        : index == 1
                        ? 'B'
                        : index == 2
                        ? 'C'
                        : 'D'}
                    </Text>
                  </View>
                  <Text
                    style={{fontSize: 18, fontWeight: '600', marginLeft: 10}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <FlatList
            data={data.Options}
            numColumns={2}
            contentContainerStyle={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: (width - 18 - 36) / 2,
                    aspectRatio: 1,
                    backgroundColor:data.marked === index + 1 ? 'red' : '#fff',
                    elevation:3,
                    alignItems:'center',
                    justifyContent:'center',
                    marginRight: index % 2 === 0 ? 9 : 0,
                    marginLeft: index % 2 === 1 ? 9 : 0,
                    marginBottom: 18,
                  }}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}
export default QuestionItem;
