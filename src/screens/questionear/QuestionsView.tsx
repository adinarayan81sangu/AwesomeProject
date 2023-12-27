import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {QuestionsData} from './QuestionsList';
import {useState, useRef} from 'react';
import QuestionItem from './QuestionItem';

const {width} = Dimensions.get('window');
function QuestionView() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [questions, setQuestions] = useState(QuestionsData);
  const flatListRef = useRef<FlatList>(null);
  const onSelectOption = (index: any, x: any) => {
    const tempData = questions;
    tempData.map((item, ind) => {
      if (index === ind) {
        if (item.marked !== -1) {
          item.marked = -1;
        } else {
          item.marked = x;
        }
      }
    });
    let temp: any = [];
    tempData.map(item => {
      temp.push(item);
    });
    setQuestions(temp);
  };
  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({animated: false, index});
    }
  };
  const Separator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{marginTop: 20}}>
        Questions:{'' + currentIndex + '/' + QuestionsData.length}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {Array(QuestionsData.length)
          .fill(1)
          .map((value, index) => {
            return (
              <>
                <TouchableOpacity
                  key={index}
                  onPress={() => scrollToIndex(index)}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: '#F8F9FE',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderColor: '#E8E9F1',
                    flexDirection: 'row',
                  }}>
                  <Text style={{color: '#8F9098'}}>{index + 1}</Text>
                </TouchableOpacity>
                {index+1 < QuestionsData.length && <Separator/>} 
              </>
            );
          })}
      </View>
      <View style={{marginTop: 30}}>
        <FlatList
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          initialScrollIndex={0}
          ref={flatListRef}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x / width;
            setCurrentIndex((x + 1).toFixed(0));
          }}
          data={questions}
          renderItem={({item, index}) => {
            return (
              <QuestionItem
                data={item}
                selectedOption={(x: any) => {
                  onSelectOption(index, x);
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
export default QuestionView;

const styles = StyleSheet.create({
  separator: {
    width: 10,
    height: 1,
    backgroundColor: 'gray',
  },
});
