import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

function Login() {
  return (
    <View style={styles.scrollView}>
      <View style={styles.container1}>
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
      <View style={styles.container2}>
        <Text style={styles.growth_Text}>Join us on the path of growth</Text>
        <TouchableOpacity
          onPress={() => console.log('Google')}
          style={styles.social_btn_g}>
          <Image
            source={require('../assets/images/Group_1345.png')}
            style={styles.g_image}></Image>
          <Text style={{color: 'white'}}>CONTINUE WITH GOOGLE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Google')}
          style={styles.social_btn}>
          <Text style={{color: '#141841'}}>USE OTHER EMAIL ID</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            backgroundColor: '#fff',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Lato',
              fontSize: 17,
              color: '#000000',
            }}>
            Already have an account?
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Lato',
              color: '#2263BD',
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationColor: '#2263BD',
            }}>
            Sign in
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#fff',
          }}>
          <Text style={styles.policyText}>
            By signing in , creating an account, or checking out as a guest you
            are agreeing to our{' '}
            <Text
              style={{
                ...styles.policyText,
                ...{
                  textDecorationLine: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationColor: '#2263BD',
                  color: '#2263BD',
                },
              }}>
              Terms of Use
            </Text>{' '}
            and our{' '}
            <Text
              style={{
                ...styles.policyText,
                ...{
                  textDecorationLine: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationColor: '#2263BD',
                  color: '#2263BD',
                },
              }}>
              Privacy Policy
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  growth_Text: {
    fontWeight: '400',
    marginBottom: 30,
    color: '#353531',
    fontSize: 16,
  },
  container1: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  policyText: {
    width: 300,
    fontWeight: '400',
    fontSize: 10,
    fontFamily: 'Lato',
    textAlign: 'center',
  },
  container2: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
  social_btn_g: {
    height: 44,
    width: 338,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141841',
  },
  social_btn: {
    height: 44,
    width: 338,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFB625',
  },
  g_image: {
    width: 20,
    height: 20,
    margin: 5,
  },
});
