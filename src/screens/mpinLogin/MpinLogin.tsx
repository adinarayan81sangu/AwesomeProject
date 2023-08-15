import {Controller, useForm} from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import { useRef, useEffect } from 'react';

interface FormData {
  Mpin: string;
}
const MpinLogin = () => {
  const {control, handleSubmit} = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log('Mpin Entered Values', data);
  };

  const mpin = useRef<TextInput>(null);

  useEffect(() => {
    Keyboard.dismiss();
    setTimeout(() => mpin.current?.focus(), 0)
  }, [mpin])

  return (
    <View style={styles.container}>
      <Text style={styles.mpinText}>Enter your 6-digit MPIN</Text>
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>
      <View>
      <Controller
            control={control}
            render={({field: {onChange, value}}) => (
                <TextInput
                  ref={mpin}
                  keyboardType="number-pad"
                  maxLength={6}
                  onChangeText={onChange}
                  value={value}
                  style={{
                   opacity: 0
                  }}
                   autoFocus={true}
                />
            )}
            name='Mpin'
            defaultValue=""
          />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export {MpinLogin};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mpinText: {
    fontSize: 18,
    marginBottom: 20,
  },
  circleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  circle: {
    width:30,
    height:30,
    borderRadius:10,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  
  inputStyle:{
    borderColor:'#000000',
    width:100,
    padding:12
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
