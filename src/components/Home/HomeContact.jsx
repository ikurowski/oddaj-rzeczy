import { TextField, ThemeProvider } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import theme from '../../theme';
import formValidationSchema from '../../yupValidationSchema';
import DecorationTitle from '../DecorationTitle';
import facebook from '../../assets/Facebook.svg';
import instagram from '../../assets/Instagram.svg';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  text: '',
};

export default function HomeContact() {
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (/* values */) => {
      // FIXME formValues(values.name, values.email, values.text);
    },
    validationSchema: formValidationSchema,
  });

  return (
    <ThemeProvider theme={theme}>
      <section className="contact">
        <div className="contact__picture" />
        <form className="contact__form" onSubmit={formik.handleSubmit}>
          <DecorationTitle firstText="Skontaktuj się z nami" />
          <div className="contact__container">
            <TextField
              sx={{ width: '48%' }}
              id="name field"
              name="name"
              label="Wpisz swoje imię"
              variant="standard"
              color="error"
              placeholder="Krzysztof"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              sx={{ width: '48%' }}
              id="email field"
              name="email"
              label="Wpisz swój email"
              variant="standard"
              color="error"
              placeholder="abc@xyz.pl"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <TextField
            id="text field"
            sx={{
              mt: '2rem',
            }}
            name="text"
            label="Wpisz swoją wiadomość"
            variant="standard"
            multiline
            color="error"
            rows={2}
            placeholder="Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
            value={formik.values.text}
            onChange={formik.handleChange}
            error={formik.touched.text && Boolean(formik.errors.text)}
            helperText={formik.touched.text && formik.errors.text}
          />
          <button className="btn__submit" type="submit">
            Wyślij
          </button>
        </form>
        <footer className="contact__footer">
          Copyright by Coders Lab
          <div className="contact__icons">
            <a className="contact__icon" href="https://www.facebook.com/">
              <img src={facebook} alt="facebook icon" />

            </a>

            <a className="contact__icon" href="https://www.instagram.com/">
              <img src={instagram} alt="instagram icon" />
            </a>

          </div>

        </footer>
      </section>
    </ThemeProvider>
  );
}
