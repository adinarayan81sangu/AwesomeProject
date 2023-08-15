import {View, Text,Pressable,StyleSheet} from 'react-native';

function ButtonReuse(props: any) {

  function PressHandler(){

  }
  return (
    <View style={styles.buttonOuterContiner}>
        <Pressable style={styles.buttonInnerContainer} onPress={props.onPress} android_ripple={{color:'#640233'}}>
        <Text style={styles.buttonText}>{props.children}</Text>
    </Pressable>
      </View>
  );
}
export default ButtonReuse;
const styles=StyleSheet.create({
  buttonOuterContiner:{
    borderRadius:30,
    margin:4,
    overflow:'hidden',
  },
 buttonInnerContainer:{
    backgroundColor:'#72063c',
    borderRadius:8,
    paddingVertical:8,
    paddingHorizontal:16,
    margin:4,
    elevation:4
  },
  buttonText:{
    color:'white',
    textAlign:'center'
  }
})