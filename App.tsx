import { View, StyleSheet, ImageBackground, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import LoginPage from './src/screens/set-new-password/LoginPage';
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect, useState } from 'react';
import { MpinLogin } from './src/screens/mpinLogin/MpinLogin';
import StartGameScreen from './src/screens/game/StartGameScree';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './src/screens/game/GameScreen';
import GameOverScreen from './src/screens/game/GameOverScreen';
import QuestionView from './src/screens/questionear/QuestionsView';
import RangeSlider from './src/screens/preferences/RangeSlider';
import { DraxList, DraxProvider, DraxScrollView, DraxView } from 'react-native-drax';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Card } from '@rneui/base';
import {
  NestableScrollContainer,
  NestableDraggableFlatList,
  ScaleDecorator,
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import { Item, mapIndexToData } from './src/UI/uitls';
import Basic from './src/screens/questionear/Nested';
import DraggableFlatListExample from './src/screens/questionear/Nested';

const alphabet = 'ABCDE'.split('');

const getBackgroundColor = (alphaIndex: number) => {
  switch (alphaIndex % 4) {
    case 0:
      return '#ffaaaa';
    case 1:
      return '#aaffaa';
    case 2:
      return '#aaaaff';
    case 3:
      return '#ffffaa';
    case 4:
      return '#ffaaff';
    case 5:
      return '#aaffff';
    default:
      return '#aaaaaa';
  }
}

const getHeight = (alphaIndex: number) => {
  let height = 50;
  if (alphaIndex % 2 === 0) {
    height += 10;
  }
  if (alphaIndex % 3 === 0) {
    height += 20;
  }
  return height;
}

const getItemStyleTweaks = (alphaItem: string) => {
  const alphaIndex = alphabet.indexOf(alphaItem);
  return {
    backgroundColor: getBackgroundColor(alphaIndex),
    height: getHeight(alphaIndex),
  };
};
function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  function pickNumberHandler(pickedNumber: any) {
    setUserNumber(pickedNumber);
    setGameOver(false)
  }
  function gameOverHandler() {
    setGameOver(true);
  }
  let screen = <StartGameScreen onConfirmNumber={pickNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }
  if (gameOver && userNumber) {
    screen = <GameOverScreen />;
  }
  const [received, setReceived] = useState<any>([]);
  const [staged, setStaged] = React.useState<any>([]);

  const [alphaData, setAlphaData] = React.useState(alphabet);
  const NUM_ITEMS = 5;

  // const initialData1: Item[] = [...Array(NUM_ITEMS)].map(mapIndexToData);
  // const [data1, setData1] = useState(initialData1);
  // const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
  //   return (
  //     <ScaleDecorator>
  //       <TouchableOpacity
  //         activeOpacity={1}
  //         onLongPress={drag}
  //         disabled={isActive}
  //         style={[
  //           styles.rowItem,
  //           { backgroundColor: isActive ? 'red' : item.backgroundColor },
  //         ]}>
  //         <Text style={styles.text}>{item.text}</Text>
  //       </TouchableOpacity>
  //     </ScaleDecorator>
  //   );
  // };
  const keyExtractor = (item: Item) => item.key;
  return (
    <>
      <RangeSlider />
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <DraxProvider>
          <View style={styles.container}>
            <DraxList
              data={alphaData}
              renderItemContent={({ item }) => (
                <View style={[styles.alphaItem, getItemStyleTweaks(item)]}>
                  <Text style={styles.alphaText}>{item}</Text>
                </View>
              )}
              onItemReorder={({ fromIndex, toIndex }) => {
                const newData = alphaData.slice();
                newData.splice(toIndex, 0, newData.splice(fromIndex, 1)[0]);
                setAlphaData(newData);
              }}
              keyExtractor={(item) => item}
            />
          </View>
        </DraxProvider> */}
        <DraggableFlatListExample/>
      </GestureHandlerRootView>
    </>
    // <QuestionView/>
    // <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>game code
    //   <ImageBackground
    //     source={require('./src/assets/images/background.png')}
    //     resizeMode="cover"
    //     style={styles.container}
    //     imageStyle={styles.backgroundImage}>
    //     <SafeAreaView style={{flex: 1}}>{screen}</SafeAreaView>
    //   </ImageBackground>
    // </LinearGradient> game code 

  );
}

export default App;
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  backgroundImage: {
    opacity: 0.25,
  },
  draggable: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  receivingZone: {
    height: 200,
    borderRadius: 10,
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
  receiver: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
  },
  alphaItem: {
    backgroundColor: '#aaaaff',
    borderRadius: 8,
    margin: 4,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alphaText: {
    fontSize: 28,
  },
  rowItem: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
