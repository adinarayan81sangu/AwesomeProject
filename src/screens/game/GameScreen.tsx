import {useState, useEffect} from 'react';

import {StyleSheet, Text, View, Alert} from 'react-native';
import NumberContainer from './components/NumberContainer';
import ButtonReuse from '../../components/Button';

function gernerateRandomBetween(min: any, max: any, exlued: any) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exlued) {
    return gernerateRandomBetween(min, max, exlued);
  } else {
    return rndNum;
  }
}
let minBounder = 1;
let maxBounder = 100;
function GameScreen(this: any, props: any) {
  const initialGuess = gernerateRandomBetween(
    1,
    100,
    props.userNumber,
  );
  const [currentGuess, setCurrentGuss] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.onGameOver();
    }
  }, [currentGuess, props.userNumber, props.onGameOver]);
  function nextGuessHandler(direction: string) {
    if (
      (direction === 'lower' && currentGuess < props.userNumber) ||
      (direction === 'greater' && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie", 'You Konow that this is wrong', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBounder = currentGuess;
    } else {
      minBounder = currentGuess + 1;
    }
    const newRandNumber = gernerateRandomBetween(
      minBounder,
      maxBounder,
      currentGuess,
    );
    setCurrentGuss(newRandNumber);
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>gameScrren</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>High or Low</Text>
        <View>
          <ButtonReuse onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </ButtonReuse>
          <ButtonReuse onPress={nextGuessHandler.bind(this, 'greater')}>
            +
          </ButtonReuse>
        </View>
      </View>
    </View>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
});
