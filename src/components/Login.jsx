import React, { useState, useEffect } from 'react';
import { Alert, TextField, ThemeProvider } from '@mui/material';
import { useFormik } from 'formik';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { loginValidationSchema } from '../yupValidationSchema';
import { auth, signIn } from '../firebase';
import DecorationTitle from './DecorationTitle';
import theme from '../theme';
import Navigation from './Navigation';

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
};

export default function Login() {
  const [errorsAPI, setErrorsAPI] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/');
      }
    });
    return unsubscribe;
  }, []);

  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (values) => {
      signIn(values.email, values.password, setErrorsAPI);
      formik.resetForm();
    },
    validationSchema: loginValidationSchema,
  });

  return (
    <ThemeProvider theme={theme}>
      <Navigation position="static" />
      <section className="login">
        <DecorationTitle firstText="Zaloguj się" />
        <form onSubmit={formik.handleSubmit}>
          {errorsAPI && (
            <Alert
              sx={{
                margin: 'auto',
                mb: 2,
                width: '40%',
                justifyContent: 'center',
              }}
              severity="error"
            >
              Zły e-mail lub hasło
            </Alert>
          )}
          <div className="login__form-container">
            <TextField
              sx={{ mb: '1rem', width: '100%' }}
              id="emailLogin"
              name="email"
              label="Wpisz swój email"
              variant="standard"
              color="error"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              sx={{ mb: '1rem', width: '100%' }}
              id="passwordLogin"
              name="password"
              label="Wpisz swoje hasło"
              variant="standard"
              type="password"
              color="error"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
          <div className="buttons">
            <RouterLink to="/rejestracja" className="btn--no-border">
              Załóż konto
            </RouterLink>

            <button className="btn__submit" type="submit">
              Załóż konto
            </button>
          </div>
        </form>
      </section>
    </ThemeProvider>
  );
}
