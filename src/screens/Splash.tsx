import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';

function Splash() {
  return (
    <View style={styles.viewContainer}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#fff"></StatusBar>
      <Image
        source={require('../assets/images/Group_1379.png')}
        style={styles.image}
      />
      <Text style={styles.funds}>ALL FUNDS</Text>
      <Text style={styles.text}>Forget the Complexities of Investing.</Text>
    </View>
  );
}
export default Splash;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: '#353531',
  },
  funds: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 50,
    color: '#353531',
  },
});
