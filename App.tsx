import {View, StyleSheet, ImageBackground} from 'react-native';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import LoginPage from './src/screens/set-new-password/LoginPage';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import {MpinLogin} from './src/screens/mpinLogin/MpinLogin';
import StartGameScreen from './src/screens/game/StartGameScree';
import LinearGradient from 'react-native-linear-gradient';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <LinearGradient colors={['#ddb52f', '#4e0329']} style={styles.conatiner}>
      <ImageBackground
        source={require('./src/assets/images/background.png')}
        resizeMode="cover"
        style={styles.conatiner}
        imageStyle={styles.backGroungImage}
      >
      <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

export default App;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  backGroungImage:{
    opacity:0.25
  }
});
