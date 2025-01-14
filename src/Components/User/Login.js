import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import Context from "../../Context";
import useStyles from "./Stylings/styleLogin";
import Alert from "@material-ui/lab/Alert";

// Renders a login form. User is redirected to home page once logged in

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const { login } = useContext(Context);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
    "LoginForm",
    "login=",
    typeof login,
    "formData=",
    formData,
    "formErrors",
    formErrors
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    console.log("🚀 ~ handleSubmit ~ result:", result);
    if (result.success) {
      history.push("/");
    } else {
      setFormErrors(result.errors.response.data.error.message);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <a href="#hello" id="hello"></a>
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" id="hello">
          Hello
        </Typography>
        <br></br>
        <span style={{ display: "inline-block" }}>Log in to freeBay</span>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          {formErrors.length ? (
            <div>
              <br />
              <Alert variant="filled" severity="error">
                {formErrors}
              </Alert>
            </div>
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onSubmit={handleSubmit}
          >
            Login
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/Signup" variant="body2">
                Don't have an account? Create one here
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
