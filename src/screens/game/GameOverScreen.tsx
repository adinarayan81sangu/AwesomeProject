import {Text, View, StyleSheet, Image} from 'react-native';

function GameOverScreen() {
  return (
    <View>
      <Text>Game Over!!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/success.png')}
        />
      </View>
    </View>
  );
}
export default GameOverScreen;
const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 150,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: 'back',
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
