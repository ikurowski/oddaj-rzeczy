import * as Yup from 'yup';

const formValidationSchema = Yup.object({
  email: Yup.string().email('Poprawny E-mail wymagany').required('E-mail wymagany'),
  name: Yup.string()
    .matches(/^[\p{L}]+$/u, 'Wpisz poprawne imię')
    .required('Imię wymagane'),
  message: Yup.string()
    .required('Wpisz wiadomość')
    .min(120, 'Wiadomość powinna mieć co najmniej 120 znaków'),
});

export default formValidationSchema;
