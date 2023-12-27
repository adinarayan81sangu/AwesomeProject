import {View,Text,StyleSheet} from 'react-native';


function NumberContainer({children}:any){
return(
  <View style={styles.conatiner}>
    <Text style={styles.numberText}>{children}</Text>
  </View>
)
};
export default NumberContainer;

const styles=StyleSheet.create({
  conatiner:{
    borderWidth:2,
    borderColor:'#ddb52f',
    padding:24,
    borderRadius:8,
    alignItems:'center',
    margin:4,
  },
  numberText:{
    color:'#ddb52f',
    fontSize:16,
    fontWeight:'bold',
  },
})