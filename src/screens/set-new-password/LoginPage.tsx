import {View, StyleSheet, TextInput, Text} from 'react-native';
import Input from '../../components/Input';
import {useForm} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
// import { Icon } from 'react-native-elements'

import {Icon} from '@rneui/base';
import InputPassword from '../../components/Input';
import {Button} from 'react-native-elements';
import {SET_NEW_PASSWORD_FIELDS} from './model/constant';
import {PasswordCriteria} from './PasswordCriteria';

function LoginPage() {
  // const {control, handleSubmit} = useForm();
  // const onSubmit = (data: any) => console.log(data);

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
  });

  console.log(errors);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
  };
  const OnSubmit = (data: any) => {
    if (data.password === data.confirmPassword) {
      console.log(data);
    } else {
      console.log('Error ');
    }
    // console.log(data);
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fffff', flex: 1}}>
      <View style={styles.container}>
        <InputPassword
          control={control}
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          name={SET_NEW_PASSWORD_FIELDS.password}
        />
        <Text>
          {errors[SET_NEW_PASSWORD_FIELDS.password]?.message as string}
        </Text>
        <InputPassword
          control={control}
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          name={SET_NEW_PASSWORD_FIELDS.confirmPassword}
        />
        <Button title={'submit'} onPress={handleSubmit(OnSubmit)}></Button>
      </View>

      <PasswordCriteria control={control} />
    </SafeAreaView>
  );
}
export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EEDC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
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
