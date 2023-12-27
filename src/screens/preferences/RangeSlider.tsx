import { View, Text,StyleSheet } from 'react-native'
import { Slider, Icon } from '@rneui/themed';
import { useState } from 'react';
import { Card } from '@rneui/base';


const RangeSlider = () => {
  const [value, setValue] = useState(1)
  return (
    <Card>

    <View style={{ margin: 20 }}>
      <Slider maximumValue={100}
      // value={value}
        onValueChange={(value) => setValue(value)} 
        step={1}
        trackStyle={{ backgroundColor: '#D4D6DD', height:10}}
        thumbTintColor='#FFF'
        minimumTrackTintColor='#D4D6DD'
        maximumTrackTintColor='#D4D6DD' 
        style={styles.sliderContainerStyle}
        thumbStyle={styles.thumbStyle}
        thumbProps={{
          children: (
            <Icon
              name="circle"
              type="font-awesome"
              size={10}
              reverse
              containerStyle={styles.iconContainerStyle}
              // iconProps={{ color:'#000', name: 'circle', size: 10 }}
            />
          ),
        }}
        />
      <Text>{value}</Text>
    </View>
    </Card>
  )
};
export default RangeSlider;
const styles=StyleSheet.create({
  iconContainerStyle: {
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center'
  },
  sliderContainerStyle: {
    width: '100%',
    height:45,
  },
  thumbStyle: {
    height: 40,
    width: 40,
    elevation: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowColor:'#000',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});