import React, { useState, useEffect } from 'react';
import { Alert, TextField, ThemeProvider } from '@mui/material';
import { useFormik } from 'formik';
import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom';
import { signUpValidationSchema } from '../yupValidationSchema';
import DecorationTitle from './DecorationTitle';
import theme from '../theme';
import Navigation from './Navigation';
import { auth, signUp } from '../firebase';

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUp() {
  const [registerIn, setRegisterIn] = useState(null);
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
      signUp(values.email, values.password, setErrorsAPI, setRegisterIn);
      formik.resetForm();
    },
    validationSchema: signUpValidationSchema,
  });

  return (
    <ThemeProvider theme={theme}>
      {registerIn && <Navigate to="/" />}
      <Navigation position="static" />
      <section className="login">
        <DecorationTitle firstText="Załóż konto" />
        <form onSubmit={formik.handleSubmit}>
          {errorsAPI && (
            <Alert
              sx={{
                margin: 'auto', mb: 2, width: '40%', justifyContent: 'center',
              }}
              severity="error"
            >
              Zły e-mail lub hasło
            </Alert>
          )}
          <div className="login__form-container">
            <TextField
              sx={{ mb: '1rem', width: '100%' }}
              id="emailSignUp"
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
              id="passwordSignUp"
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
            <TextField
              sx={{ mb: '1rem', width: '100%' }}
              id="confirmPasswordSignUp"
              name="confirmPassword"
              label="Powtórz hasło"
              variant="standard"
              type="password"
              color="error"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
          </div>
          <div className="buttons">
            <RouterLink to="/logowanie" className="btn--no-border">
              Zaloguj się
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
