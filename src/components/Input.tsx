import {useState} from 'react';
import {Control, Controller} from 'react-hook-form';
import {View, TextInput, StyleSheet, Text} from 'react-native';

interface InputProps {
  control: Control<any>;
  label: string;
  value: string;
  name: string;
  onChange: (text: string) => void;
}

function InputPassword({control, label, name, value, onChange}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.inputContainer}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputField}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={!showPassword}
            />
            <Text onPress={toggleShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </Text>
          </View>
        )}
        name={name}
        rules={{
          pattern: {
            value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–\[\]{}:;',?/*~$^+=<>]).{8,20}$/,
            message: 'password doesnt match'
          }
        }}
      />
    </View>
  );
}
export default InputPassword;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#d7d7d7',
  },
  inputField: {
    padding: 14,
    fontSize: 22,
    width: '90%',
  },
});
