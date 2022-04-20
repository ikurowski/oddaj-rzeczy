/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, ThemeProvider } from '@mui/material';
import { useFormik } from 'formik';
import theme from '../../theme';
import { formValidationSchema } from '../../yupValidationSchema';
import DecorationTitle from '../DecorationTitle';
import facebook from '../../assets/Facebook.svg';
import instagram from '../../assets/Instagram.svg';

const url = 'https://fer-api.coderslab.pl/v1/portfolio/contact';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  message: '',
};

export default function HomeContact() {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: async (values) => {
      try {
        await axios
          .post(
            url,
            {
              name: values.name,
              email: values.email,
              message: values.message,
            },
            {
              'Content-Type': 'application/json',
            },
          )
          .then((response) => {
            // FIXME testy
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
          });
        setSuccess(true);
        formik.resetForm();
      } catch (error) {
        console.log(error);
        alert('Spróbuj jeszcze raz.');
      }
    },
    validationSchema: formValidationSchema,
  });

  return (
    <ThemeProvider theme={theme}>
      <section id="contact" className="contact">
        <div className="contact__picture" />
        <form className="contact__form" onSubmit={formik.handleSubmit}>
          <DecorationTitle firstText="Skontaktuj się z nami" />
          {success && (
            <h4 className="contact__success-message">
              Wiadomość została wysłana!
              <p> Wkrótce się skontaktujemy.</p>
            </h4>
          )}
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
            id="message field"
            sx={{
              mt: '2rem',
            }}
            name="message"
            label="Wpisz swoją wiadomość"
            variant="standard"
            multiline
            color="error"
            rows={3}
            placeholder="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
             Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <button
            style={{ marginLeft: 'auto', marginTop: '1rem' }}
            className="btn__submit"
            type="submit"
          >
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
