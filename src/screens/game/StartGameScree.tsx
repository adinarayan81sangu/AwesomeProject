import {TextInput, View, StyleSheet, Alert} from 'react-native';
import ButtonReuse from '../../components/Button';

import {useState} from 'react';
function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');
  function numberInputHandler(inputtext: any) {
    setEnteredNumber(inputtext);
  }
  function resetHandler() {
    setEnteredNumber('');
  }
  function confirmHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99',
        [{text:'Okay',style:'destructive',onPress:resetHandler}]
      );
      return;
    }
    console.log('Valida Number');
    
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonContainerView}>
        <View style={styles.buttonsView}>
          <ButtonReuse onPress={resetHandler}>Reset</ButtonReuse>
        </View>
        <View style={styles.buttonsView}>
          <ButtonReuse onPress={confirmHandler}>Confirm</ButtonReuse>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#4e0329',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 25,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 1,
    color: '#ddb52f',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainerView: {
    flexDirection: 'row',
  },
  buttonsView: {
    flex: 1,
  },
});
