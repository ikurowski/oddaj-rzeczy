import * as Yup from 'yup';

const formValidationSchema = Yup.object({

  email: Yup.string().email('Poprawny E-mail wymagany').required('E-mail wymagany'),
  name: Yup.string().required('Imię wymagane'),
  text: Yup.string()
    .required('Wpisz wiadomość')
    .min(60, 'Wiadomość powinna mieć co najmniej 60 znaków'),

});

export default formValidationSchema;
