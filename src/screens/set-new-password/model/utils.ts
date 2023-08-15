


const criteria = (password: string) => {

  return ({
    //At least one digit [0-9].
    hasDigit: () =>  password && (/.*[0-9].*/.test(password)),
    //At least one lowercase  [a-z].
    hasLowercase:() => password && (/.*[a-z].*/.test(password)),
    //At least 8 characters and a maximum of 20 characters
    isWithinLengthRange:() => password && (/^.{8,20}$/.test(password))
  })

}



//At least one uppercase Latin character [A-Z].
const hasUppercase = (password: string) => /.*[A-Z].*/.test(password);
//At least one special character like !@#&()–[{}]:;',?/*~$^+=<>
const hasSpecialCharacter = (password: string) =>
  /.*[!@#&()–\[\]{}:;',?/*~$^+=<>].*/.test(password);

export {
  hasUppercase,
  hasSpecialCharacter,
  criteria
};
