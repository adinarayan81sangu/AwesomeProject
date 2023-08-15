import React from 'react';
import {Control, useWatch} from 'react-hook-form';
import {View, Text} from 'react-native';
import {SET_NEW_PASSWORD_FIELDS} from './model/constant';
import {
  hasSpecialCharacter,
  hasUppercase,
  criteria,
} from './model/utils';

interface PasswordCriteriaProps {
  control: Control<any>;
}

const PasswordCriteria = ({control}: PasswordCriteriaProps) => {
  const password = useWatch({
    name: SET_NEW_PASSWORD_FIELDS.password,
    control,
  });
  return (
    <View>
      <Text>{criteria(password).hasDigit() ? 'Yes' : 'No'} At least one digit [0-9].</Text>
      <Text>
        {criteria(password).hasLowercase() ? 'Yes' : 'No'} At least one lowercase [a-z].
      </Text>
      <Text>
        {password && hasUppercase(password) ? 'Yes' : 'No'} At least one uppercase Latin
        character
      </Text>
      <Text>
        {hasSpecialCharacter(password) ? 'Yes' : 'No'} At least one special
        character like !@#&()–[{}]:;',?/*~$^+=<></>
      </Text>
      <Text>
        {criteria(password).isWithinLengthRange() ? 'Yes' : 'No'} At least 8 characters and
        a maximum of 20 characters
      </Text>
    </View>
  );
};

export {PasswordCriteria};
