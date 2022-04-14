import * as Yup from 'yup';

export const formValidationSchema = Yup.object({
  email: Yup.string().email('Poprawny E-mail wymagany').required('E-mail wymagany'),
  name: Yup.string()
    .matches(/^[\p{L}]+$/u, 'Wpisz poprawne imię')
    .required('Imię wymagane'),
  message: Yup.string()
    .required('Wpisz wiadomość')
    .min(120, 'Wiadomość powinna mieć co najmniej 120 znaków'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Poprawny E-mail wymagany').required('E-mail wymagany'),
  password: Yup.string()
    .required('Hasło wymagane')
    .min(6, 'Hasło powinna mieć co najmniej 6 znaków'),
});

export const signUpValidationSchema = Yup.object({
  email: Yup.string().email('Poprawny E-mail wymagany').required('E-mail wymagany'),
  password: Yup.string()
    .required('Hasło wymagane')
    .min(6, 'Hasło powinna mieć co najmniej 6 znaków'),
  confirmPassword: Yup.string().required('Hasło wymagane').min(6, 'Hasło powinna mieć co najmniej 6 znaków').oneOf([Yup.ref('password'), null], 'Hasła muszą być zgodne'),
});
